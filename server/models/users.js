const mongoose =require("mongoose")

const userschema = new mongoose.Schema(
    {
        email:String,
        age:Number,
        team:String,
        password:String,
        role: {
            type: String,
            default: "user"
        }

    }
)

const Usermodel= mongoose.model("users", userschema)

module.exports =Usermodel


