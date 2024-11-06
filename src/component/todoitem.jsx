
function Todoitem(props){
    let listarr = props.listarr
   let setlistarr =props.setlistarr
    function handlechange(removeid){
    let newarr = listarr.filter(function(item){
        if(item.id === removeid){
            return false
       }
       else{ 
          return true
         }

    })
     setlistarr(newarr)
    
   }

    return(
        <div className="flex justify-between"><p> {props.index+1}.{props.activity}</p><button className="text-red-400" onClick={()=>{
            handlechange(props.id)
        }}>Delete</button></div>
    )
}
export default Todoitem