import { useParams } from "react-router-dom";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SendUserToMongodb(){
    const params=useParams()
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:4000/${params.username}/${params.password}`)
        .then(navigate('/login'))
    })
    return(
        <>
        <p>{params.username} </p><br/>
        <p>{params.password} </p>
        </>
    ) 
}