import { useContext } from "react";
import { contex } from "../App";
import { Link } from "react-router-dom";


export default function SeeDoneToDoRegExData(){
    const {doneRegData}=useContext(contex)
    return(
    <>
    {doneRegData.map((item)=>{
            return <p> {item.text} </p>
        })}
        <Link to={'/SeeDoneToDos'} > return to seeDoneTodos </Link>
    </>
    )
}