import { useState } from "react"

function Todoform(props){
    const listarr = props.listarr
    const setlistarr = props.setlistarr
    const [newlist,setnewlist]=useState()
    function handlechange(event){
        setnewlist(event.target.value)

    }
    function addlist(){
        setlistarr([...listarr,{id:listarr.length+1,activity:newlist}])
    }
    return(
       
          <div className="flex flex-col gap-3 my-1 ">
                <h1 className="font-medium text-2xl">Manage Activites</h1>
               <div>
                <input className=" border border-black p-1" placeholder="Next Activity?" type="text" onChange={handlechange}></input>
                <button className="bg-black text-white p-1 border border-black" onClick={addlist}>Add</button>
                </div>
                </div>
    )
}
export default Todoform