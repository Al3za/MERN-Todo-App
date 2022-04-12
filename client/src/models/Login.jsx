import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const[username,SetUsername]=useState(null)
    const[password,SetPassword]=useState(null)
    const[wrongLogin,setwrongLogin]=useState('')
    const navigate=useNavigate()
    const URL_LOGIN='http://localhost:4000/login/'

    function handleOnSubmit(e){
        e.preventDefault()
        const PayLoad={ 
            username,
            password
        }

        fetch(URL_LOGIN,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(PayLoad)
        })
        .then(res=>res.json())
        .then(data=>{
            if(typeof(data)=='object'){
                localStorage.setItem("token",data.token)
                console.log(data)
                navigate('/SkapaToDos') 
            }else{
                setwrongLogin(data)
            }
        })
    }
    return(
        <>
        <h1>Login</h1>

        <form onSubmit={handleOnSubmit} >
            username <input type="text"
            placeholder="username"
            onChange={e=>SetUsername(e.target.value)}
            /><br/>
            password <input type="text" 
            placeholder="password"
            onChange={e=>SetPassword(e.target.value)}
            />
            <input type="submit" />
        </form> <br/>
        <h1>{wrongLogin}</h1>
        </>
    )
}