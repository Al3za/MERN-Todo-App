import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

export default function SeeDoneToDos(){
   const [seeDoneToDo,SetseeDoneToDo]=useState([]);
   const [listId,setListId]=useState(null)
   const token=localStorage.getItem('token')

    useEffect(()=>{
        const URL_doneToDo=`http://localhost:4000/ToDo/DoneToDo/${token}`;
        fetch(URL_doneToDo)
    .then(res=>res.json())
    .then(data=>SetseeDoneToDo(data))
    },[])

    function HandleOnSubmit(){ 
        
        const reset=`http://localhost:4000/ToDo/reset/${listId}/${token}`
        fetch(reset)
    }
    

    return (
    <>
    {listId}
    {seeDoneToDo.map((item,index)=>{
        return <p key={index}> {item.text}
       
          <form onSubmit={HandleOnSubmit}>
            reset todo  <input type="checkbox" onChange={e=>setListId(item._id)} /> 
              <input type="submit" />
          </form>
        </p>
    })}
    <Link to={'/see/UserTodos'}> back to your Todos </Link>
    </>
     
    )
}

    