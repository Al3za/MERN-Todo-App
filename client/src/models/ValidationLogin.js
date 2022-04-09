import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function ValidationLogin(){
   const params=useParams();
   const [Seedata,setData]=useState(null)
      const {username,password}=params;
      
      useEffect(()=>{
          fetch(`https://catfact.ninja/fact`)
          .then(res=>res.json())
          .then(data=>console.log(data.fact))
      })
 
   return (
       <>
       <p>{Seedata}</p>
       <p>{username}</p>
       <p>{password}</p>
       </>
   )
}