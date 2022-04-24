import { useContext, useState } from "react"
import { contex } from "../App"
import { useNavigate, Link } from "react-router-dom"


export default function Login(){
    const {username,SetUsername}=useContext(contex)
    const[password,SetPassword]=useState(null)
    const[wrongLogin,setwrongLogin]=useState('')
    const navigate=useNavigate()
    const URL_LOGIN='http://localhost:4000/login/'
    const clear_token=localStorage.clear('token')

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
        <Link to={'/'} > create user </Link>
        </>
    )
}