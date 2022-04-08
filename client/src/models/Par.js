import { useParams } from "react-router-dom";
import {useEffect } from "react";

export default function Par(){
    const params=useParams()

    useEffect(()=>{
        fetch(`http://localhost:4000/${params.username}/${params.password}`)
    })
    return(
        <>
        <p>{params.username} </p><br/>
        <p>{params.password} </p>
        </>
    ) 
}