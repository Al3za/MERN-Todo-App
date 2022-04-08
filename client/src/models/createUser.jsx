import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {context} from '../App'


export default function CreateUser(){
   const {name,setName,password,setPassword}=useContext(context)
    return(
        <div>
            {name}<br/>
            {password}
            <h1>create user</h1>

            <form >
                set name <input type="text"
                 placeholder='name' 
                 onChange={e=>setName(e.target.value)} /><br/>

                 set password <input type="text" 
                  placeholder='password' 
                  onChange={e=>setPassword(e.target.value)} />
            </form><br/>

            <Link to={`/${name}/${password}`} >
                click her to create a user
            </Link>
            
            {/* <form action="/sub" method="post">
                username <input type="text" name='username'/><br/>
                password <input type="text" name="password"/>
                <input type="submit" />
            </form> */}
        </div>
    )
}