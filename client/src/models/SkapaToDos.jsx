import { useState } from "react"
import { Link } from "react-router-dom"

export default function SkapaToDos(){
    const[toDo,setToDo]=useState(null)
    const [LookToken,setLookToken]=useState(null)
    const Token=localStorage.getItem('token')
    
    function handleOnSubmit(e){
        e.preventDefault()

        if(Token){

        const ToDo_Url=`http://localhost:4000/ToDo/TodoList/${Token}`;
        const payLoad={toDo}
 
        fetch(ToDo_Url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(payLoad)
        })
        .then(res=>res.json())
        .then(data=>{
            setLookToken(data)
        })
    } 
    }

    return( 
        <>
        
        <h1>skapa toDo list</h1>
        <form onSubmit={handleOnSubmit} >
            To Do <textarea cols="30" rows="10" onChange={e=>setToDo(e.target.value)} ></textarea>
            <input type="submit" />
        </form><br/>
        
        { LookToken ? (
            <Link to="/see/UserTodos"> <h2>see all your todos</h2> </Link>
        ):(
            ""
        )}
        <Link to={'/login'}> <button> logga ut </button> </Link>
        </> 
    )
} 