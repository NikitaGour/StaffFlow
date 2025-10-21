import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function All(){
    const [users, setUsers] = useState([{email: "", password: "", age: "", team: ""}])
    const [isAuth, setIsAuth] = useState(false)
    
 console.log(users)

 const handleDelete = (id) => {
  const token = localStorage.getItem("token");
  if (token) {
    fetch(`http://localhost:3001/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        if (data.success) {
          // Remove deleted user from state without reloading
          setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.error(err));
  }
};


useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    fetch(`http://localhost:3001/admin/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if(data.success){
            setUsers(data.users)
            setIsAuth(true)
        }
        console.log("data: ", data)
      })
      .catch(err => console.error(err));
  }
}, []);




return(

    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">    {/*full-screen flex container with centered content and a primary background */}
           { isAuth ?   
              <div className='w-50 bg-white rounded p-3'> {/* white box, half-width, with padding and rounded corners */}
                 <h1>All Users</h1> 
                 <table className="table">

                    <thead>
                        <tr>
                            <th>Email</th>                  
                            <th>Age</th>
                            <th>Team</th>
                            <th>Delete_Employee</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                        users.map((user,index)=>{
                            return (
                               user.role !=='admin' &&
                                <tr key={index}>
                                    <td>{user.email} </td>                                   
                                    <td>{user.age}</td>
                                    <td>{user.team}</td>
                                    <td>  {/* making a button  which link  to the Update componend router present in app.js*/}
                                    <button className='btn btn-success'  
                                
                                    onClick={(e)=>handleDelete(user._id)}>Delete</button>
                                    </td>

                                </tr>
                              
                            )
                    })
                }
                       
                        
                    </tbody>
                 </table>

                </div> 
      : "Unauthorized/Not an admin"  }
          
</div>) 

}

export default All;
