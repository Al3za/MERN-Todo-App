import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Create(){
    const params=useParams()
    return(
        <>
        <p>{params.ale} </p><br/>
        <p>{params.calabro} </p>
        </>
    )
}