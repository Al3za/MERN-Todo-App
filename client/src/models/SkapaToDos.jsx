import { useState } from "react"

export default function SkapaToDos(){
    const[toDo,setToDo]=useState('')
    const getToken=localStorage.getItem('token')
    const ToDo_Url=`http://localhost:4000/ToDo/TodoList/${getToken}`

    function handleOnSubmit(e){
        e.preventDefault()

        const payLoad={toDo}
 
        fetch(ToDo_Url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(payLoad)
        })
    }

    return(
        <>
        <h1>skapa toDo list</h1>
        {toDo}
        <form onSubmit={handleOnSubmit} >
            To Do <textarea cols="30" rows="10" onChange={e=>setToDo(e.target.value)} ></textarea>
            <input type="submit" />
        </form>
        </> 
    )
} 