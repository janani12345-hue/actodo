import { useState } from "react"
import Todoitem from "./todoitem"

function Todolist(props){
   const listarr = props.listarr;
   const setlistarr = props.setlistarr
   
    
    return(
        <div className="bg-[#BDB4EA] p-2 border rounded-md flex-grow">
                <h1 className="text-2xl">Today Activiites</h1>
                {
                    listarr.length==0? "you have not any activity yet":""
               
                }
              
                
                {
                   listarr.map(function(item,index){
                        return <Todoitem activity={item.activity} listarr={listarr} setlistarr={setlistarr} id={item.id} index={index}></Todoitem>
                    })
                }
              
            </div>
    )
}
export default Todolist