const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const UserModel = require("./models/users")
require('dotenv').config()
const jwt= require('jsonwebtoken')
const app =express()
const JWT_SECRET = "nikita"
const bcrypt =require("bcryptjs");

mongoose.connect('mongodb://localhost:27017/EMS')

app.use(cors())    
app.use(express.json()) ; 

app.delete('/deleteUser/:id', async (req, res) => {
  const id = req.params.id;
  const token = req.headers.authorization;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
   
    const userToDelete = await UserModel.findById(id);
    if (!userToDelete) {
      return res.json({ success: false, message: "User not found" });
    }
    if (userToDelete.role === "admin") {
      return res.json({ success: false, message: "Cannot delete admin" });
    }

    await UserModel.findByIdAndDelete(id);
    res.json({ success: true, message: "User deleted successfully" }); // 
  } catch (error) {
    console.log("Error: User is not authorised to access this", error);
    res.json({ success: false, message: "Unauthorized or error occurred" });
  }
});


// Update logged-in user's profile
app.put("/update-profile", async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    // Extract fields to update from body
    const { email, age, team } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      payload.mongoID,
      { email, age, team },
      { new: true } // return updated document
    );

    res.json({ success: true, message: "Profile updated successfully", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.post("/register",async (req,res)=>{
    console.log(req.body)
    //step 1 creating hash of pwd
    const salt=await bcrypt.genSalt(10);
    const salted_pwd=await bcrypt.hash(req.body.password,salt);
    console.log(salted_pwd);
    //step 2 saving hash pwd in db
    req.body.password=salted_pwd
    const user = await UserModel.create(req.body)       
    console.log(user);
    if(user){
      res.json({success: true, message: "Registered"})
    }
    else{
      res.json({success: false, message: "Not Registered"})
    }
})

app.post("/login",async (req,res)=>{   
    const {email,password}=req.body;
    console.log(email,password)
    const user = await UserModel.findOne({email:email})  
    // step1 : verify user is present or not
    if(!user){
      return res.json({success: false, message: "Email not found!"})
    }   

  console.log("Found user is : ", user)
    // step 2 : Password verify

    const stored_pwd= user.password;
    console.log(stored_pwd)
    const ispwdcorrect=await bcrypt.compare(password,stored_pwd)
    if(ispwdcorrect)
    {
      const payload = {
        mongoID: user._id,
        role: user.role
      }
      const token = jwt.sign(payload, JWT_SECRET);
      console.log("My JWT token is: ", token)
      console.log("Login Successfull!");
      res.json({success: true, message: "Logged in nicely!", token: token})
    }
    else{
      res.json({success: false, message: "Incorrect Password!"})
    }    
})

app.get("/user-details", async (req, res) => {
  const token = req.headers.authorization;
  console.log("token: ", token)
  const payload = jwt.verify(token, JWT_SECRET)
  console.log(payload)
  try {
    const user = await UserModel.findById(payload.mongoID);
    if (user) {
      res.json({user});
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

app.get('/validate', async (req, res)=>{
  const token = req.headers['authorization'];
  const payload = jwt.verify(token, JWT_SECRET)
  res.json({success: true, payload})
})

app.get('/admin/users',async (req,res)=>{
  const frontendToken = req.headers.authorization
  let payload
  try {
    payload = await jwt.verify(frontendToken, JWT_SECRET);
  } catch (error) {
    return res.json({success: false, message: "An error occured!"})
  }
  
  console.log("payload: ", payload);
  if(payload.role!=='admin'){
    return res.json({success: false, message: "Unauthorized to access this resource"})
  }

  const users = await UserModel.find({})
  res.json({users, success: true})
})

app.listen(3001,()=>
{
    console.log("server is running")
})

