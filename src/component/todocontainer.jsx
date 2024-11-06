import Todoform from "./todoform"
import Todolist from "./todolist"
import { useState } from "react"
function Todocontainer(){
    const [list,setlist]=useState([{
        id:1,
        activity:"Go for a Walk",
    },{
        id:2,
        activity:"Have a breakfast"
        
    },
])
    return(
        <div>
           
           <div className="flex gap-1 flex-wrap" >
            <Todoform listarr={list} setlistarr={setlist}></Todoform>
          <Todolist listarr={list} setlistarr={setlist}></Todolist>            
        </div>
        </div>
       
    )
}
export default Todocontainer