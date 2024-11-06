import Header from '../component/header';
import Card from '../component/card';
import Todocontainer from '../component/todocontainer';

import { useLocation } from "react-router-dom"
function Landing(){
    const data = useLocation()
    return(
        <div className="bg-black p-14 ">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
         <Header name={data.state.user} />
         <div className=" md:flex justify-between gap-2 p-2 flex-wrap " >
        
         <Card bgcolor={"#8272DA"} title={20} subtitle={" Chennai"}></Card>
         <Card bgcolor={"#FD6663"} title={" 20 December"} subtitle={"18:20:08"} ></Card>
         <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
         
         </div>
         <Todocontainer></Todocontainer>
        </div>
      
      
      </div> 
     
     
    )
}
export default Landing