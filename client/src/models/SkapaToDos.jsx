import { useState, useContext } from "react"
import { contex } from "../App"
import { Link } from "react-router-dom"

export default function SkapaToDos(){

    const {username}=useContext(contex)
    const[toDo,setToDo]=useState(null)
    const [LookToken,setLookToken]=useState(null)
    const Token=localStorage.getItem('token')
    if(Token){
    function handleOnSubmit(e){
        e.preventDefault()

        

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
    

    return( 
        <>
        
        <h1>hej {username}, skapa din toDo list</h1>
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
        }else {
           return <>
            <h1> logga in för att kunna skriva todo List</h1> 
            <Link to={'/login'}> <button> logga ut </button> </Link>
           </>
        }
} 