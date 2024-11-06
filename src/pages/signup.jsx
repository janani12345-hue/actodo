import {Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const navigate = useNavigate()
    const userdetails = props.user
    const setuserdetails =props.setuserdetails
    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()
    function handleUInput(event){
        seteusername(event.target.value)

    }
    function handlePInput(event){
        setepassword(event.target.value)
    }
    function addUser(){
        setuserdetails([...userdetails,{username:eusername,password:epassword}])
       navigate("/")
    }
    return (

        <div className="bg-black p-10">

            <div className="bg-slate-50 p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hi Hello</h1>
                <p>Sign up here:)</p>
                <div className="flex flex-col gap-3 my-2">

                <input type="text"
                    className="w-56 h-10 border rounded-md bg-transparent  border-black p-1"
                    placeholder="Username"  onChange={handleUInput}></input>
                <input type="text"
                    className="w-56 h-10 border rounded-md bg-transparent  border-black p-1"
                    placeholder="Password" onChange={handlePInput} ></input>
                <input type="text"
                    className="w-56 h-10 border rounded-md bg-transparent  border-black p-1"
                    placeholder="Confirm Password"  ></input>
               
                    <button className="bg-blue-500 border rounded-md p-2 w-24" onClick={addUser} >Sign Up</button>
                </div>

            <p>Already have an account?<Link to={"/"}className="underline">Login</Link></p>
            </div>

        </div>
    )
}
export default Signup