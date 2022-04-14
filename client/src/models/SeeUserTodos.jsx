import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom" 
//import { createContext } from "react";

//const context=createContext({});

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
                //console.log(data[0]._id)
                
            })
    }
    }) 

    function HandleSubmit(){
      
      console.log(ToDoId)
         const DELETE_URL=`http://localhost:4000/ToDo/deleteTodo/${ToDoId}`
         fetch(DELETE_URL)
         //.then(navigate('/see/UserTodos'))
    }

return(  
    
    <>
    <h1>Se your List</h1> 
    {datas.map((item)=>{
        return <p >{item.text} 
        <form onSubmit={HandleSubmit}>
             done <input type="checkbox" value={ToDoId} onClick={e=>setToDoId(item._id)} />
             <input type="submit" />
              </form> </p>
    })}
    </>
)

}

//export {context}