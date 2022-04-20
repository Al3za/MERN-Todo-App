import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom" 
import { Link } from "react-router-dom";


export default function SeeUserTodos(){

    const [datas,SetDatas]=useState([])
    const [ToDoId,setToDoId]=useState(null)
    const navigate=useNavigate()
    const token=localStorage.getItem('token');

    useEffect(()=>{
        if(token){
            const SEE_ALL_USER_BLOGS=(`http://localhost:4000/ToDo/SeeUserTodos/${token}`);

            fetch(SEE_ALL_USER_BLOGS) 
            .then(res=>res.json())
            .then(data=>{
                SetDatas(data)
                
            })
    }
    }) 

    function HandleSubmit(){
      
         const DONE_TODO=`http://localhost:4000/ToDo/DoneToDoCreate/${ToDoId}`
         const DELETE_URL=`http://localhost:4000/ToDo/deleteTodo/${ToDoId}`
         fetch(DONE_TODO)
         .then(
             fetch(DELETE_URL)
              )
    }   
  
return(   
    
    <div> 
        <h1>Se your List</h1>
        {datas.map((item)=>{
            return  <p>{item.text} 
            <form onSubmit={HandleSubmit}>
                 done <input type="checkbox" value={ToDoId} onClick={e=>setToDoId(item._id)} />
                 <input type="submit" />
                  </form> 
                  </p> 
       })}
        <Link to={'/SeeDoneToDos'}>look att all ur done toDo</Link>
    </div>
)
 
}
