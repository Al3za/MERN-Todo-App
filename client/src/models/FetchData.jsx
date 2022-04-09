import { useEffect,useState } from "react";


export default function FetchData(){

    const[seeData,setData]=useState(null)

    useEffect(()=>{
        fetch('https://catfact.ninja/fact')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setData(data)
    })
    },[])

    return (
        <div>
            <h1>{seeData} </h1>
            <h1>hello</h1>
        </div>
    )
}