import { useState,useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import { contex } from "../App";



export default function SeeDoneToDos(){
  
  const {setDoneRegData}=useContext(contex);

   const [seeDoneToDo,SetseeDoneToDo]=useState([]);
   const [listId,setListId]=useState(null)
   const [searchText,setsearchText]=useState(null)
   const [Nr,setNr]=useState(null)

   const token=localStorage.getItem('token')
   const navigate=useNavigate();

    useEffect(()=>{
      if(token){
        const URL_doneToDo=`http://localhost:4000/ToDo/DoneToDo/${token}/${Nr}`;
        fetch(URL_doneToDo)
    .then(res=>res.json())
    .then(data=>{
      SetseeDoneToDo(data) 
    },[])
  }
})


    function HandleOnSubmit(){ 
        
        const reset=`http://localhost:4000/ToDo/reset/${listId}/${token}`
        fetch(reset)
    }

    function HandleClick(){
    
       const testRegEx=`http://localhost:4000/ToDo/testDoneToDo/${searchText}/${token}`
       fetch(testRegEx)
       .then(res=>res.json())
       .then(data=>setDoneRegData(data))
       .then(navigate('/seeDoneToDoRegExData'))

    }
    

    return (
    <>
    {seeDoneToDo.map((item,index)=>{
        return <p key={index}> {item.text}
       
          <form onSubmit={HandleOnSubmit}>
            reset todo  <input type="checkbox" onChange={e=>setListId(item._id)} /><br/>
              <input type="submit" />
          </form>
        </p>
    })} 
    search DonetodoList <input type="text" onChange={(e=>setsearchText(e.target.value))} /> {searchText} <br/><br/>
    sortering <input type="text" onChange={(e=>setNr(e.target.value))}/><br/><br/> {Nr}
    <button onClick={HandleClick}> search Text </button>
    <Link to={'/see/UserTodos'}> back to your Todos </Link>
    </>
     
    )
}

    