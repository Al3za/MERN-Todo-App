import { useState,useEffect, useContext } from "react";
import { contex } from "../App";
import {useNavigate} from "react-router-dom" 
import { Link } from "react-router-dom";


export default function SeeUserTodos(){
    const {setRegData}=useContext(contex)

    const [datas,SetDatas]=useState([])
    const [ToDoId,setToDoId]=useState(null)
    const [searchText,setsearchText]=useState(null)
    const [test,setTest]=useState(null)

    const navigate=useNavigate()
    const token=localStorage.getItem('token');

    useEffect(()=>{
        if(token){
        
            const SEE_ALL_USER_BLOGS=`http://localhost:4000/ToDo/SeeUserTodos/${token}/${test}`;

            fetch(SEE_ALL_USER_BLOGS) 
            .then(res=>res.json())
            .then(data=>{
                SetDatas(data)
                
            },[])
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

    function HandleClick(){
    
       const testRegEx=`http://localhost:4000/ToDo/test/${searchText}/${token}`
       fetch(testRegEx)
       .then(res=>res.json())
       .then(data=>setRegData(data))
       .then(navigate('/seeRegExData'))

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
       search todoList <input type="text" onChange={(e=>setsearchText(e.target.value))} /><br/><br/>
       sortering <input type="text" onChange={(e=>setTest(e.target.value))} /><br/><br/> {test}
       <button onClick={HandleClick}> search Text </button>
       <br/>
        <Link to={'/SeeDoneToDos'}>look att all ur done toDo</Link>
    </div>
)
 
}
