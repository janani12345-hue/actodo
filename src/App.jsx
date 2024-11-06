
import Header from "./component/header";
import Card from "./component/card";
import Todocontainer from "./component/todocontainer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";



   
   
function App(){
 
 

  const [userdetails,setuserdetails]=useState([{
    username:"karthik",
    password:"123"
},])
return(

<BrowserRouter>


<Routes>
<Route path="/" element={<Login user={userdetails} ></Login>}></Route>
<Route path="/signup" element={<Signup user={userdetails} setuserdetails={setuserdetails}></Signup>}></Route>
<Route path="/landing" element={<Landing></Landing>}></Route>
</Routes>
</BrowserRouter>
)
}
   
  export default App;
