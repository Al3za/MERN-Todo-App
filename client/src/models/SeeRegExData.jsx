import { useContext } from "react";
import { contex } from "../App";
import { Link } from "react-router-dom";


export default function SeeRegExData(){
    const {regData}=useContext(contex)
    return(
    <>
    {regData.map((item)=>{
            return <p> {item.text} </p>
        })}
        <Link to={'/see/UserTodos'} > return to usersTodoList </Link>
    </>
    )
}