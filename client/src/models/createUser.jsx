import { useState} from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function CreateUser(){
    const [username,setName]=useState('')
    const [password,setPassword]=useState('')
    const [wrongUser,setWrongUser]=useState('')
   const navigate=useNavigate()

    const URL='http://localhost:4000/createUser'

    function HandleOnsubmit(e){
      e.preventDefault()
        const PayLoad={
            username,
            password
        };
        console.log(username,password)
        fetch(URL,{ 
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(PayLoad)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(typeof(data)) 
            console.log(data)
            if(data==='done'){
                navigate('/login')
            }else{
                setWrongUser(data)
            }
        })
    }
 
    return(
        <div>
            {username}<br/>
            {password}
            <h1>create user</h1>
 
            <form onSubmit={HandleOnsubmit} >
                set username <input type="text"
                 placeholder='username' 
                 onChange={e=>setName(e.target.value)} /><br/>

                 set password <input type="text" 
                  placeholder='password' 
                  onChange={e=>setPassword(e.target.value)} />

                  <input type='submit'/>
            </form><br/>

            <h2>{wrongUser}</h2>

            <Link to={'/login'}> <button> go to login </button> </Link>
        

        </div>
    )
}