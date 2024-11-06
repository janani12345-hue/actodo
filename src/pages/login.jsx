import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const userdetails = props.user
    const navigate = useNavigate()
    

   
    const [register,setrgister] = useState(true)
    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()
    function handleuchange(event){
        seteusername(event.target.value)
    }
    function handlepchange(event){
        setepassword(event.target.value)
    }
    function handlechange(){
       let userfound = false
     userdetails.forEach(function(item){
        if(item.username === eusername && item.password === epassword){
           
            console.log("Login successful")
            userfound = true
            navigate("./landing" ,{state:{user:eusername}})
           
        }
      
    
     })
     if(userfound === false){
        console.log("Login Failed")
        setrgister(false)
       }
    }
    return (

        <div className="bg-black p-10">

            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hi Hello</h1>
                {
                    register?<p>I help you manage your activites afer login:)</p>:<p className="text-red-400">please Sign up before you login</p>
                }
                <div className="flex flex-col gap-3 my-2">
                    <input type="text"
                        className="w-56 h-10 border rounded-md bg-transparent  border-black p-1"
                        placeholder="Username" onChange={handleuchange} ></input>
                    <input type="text"
                        className="w-56 h-10 border rounded-md bg-transparent  border-black p-1"
                        placeholder="Password"  onChange={handlepchange}  ></input>


                    <button className="bg-orange-400 border rounded-md p-2 w-24" onClick={handlechange} >Login</button>

                    <p>Don't have an acoount?<Link to={"/signup"} className="underline">Signup</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Login