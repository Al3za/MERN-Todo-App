import { useContext } from "react"
import { context } from "../App"
import { Link } from "react-router-dom"

export default function Login (){
const {name,setName,password,setPassword}=useContext(context)
    return(
        <div>

        {name}<br/>
         {password}   
        <form >
                   set name <input type="text"
                   placeholder="name" 
                   onChange={e=>setName(e.target.value)}  />
                   <br/>

                  set password <input type="text" 
                  placeholder="password"
                  onChange={e=>setPassword(e.target.value)}
                   />
            </form>

            <Link to={`/login/${name}/${password}`} >loggin</Link>


            </div>
    )
}