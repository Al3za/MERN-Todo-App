import { useState, useEffect, useContext } from "react"
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
    const URL_doneToDo=`http://localhost:4000/ToDo/DoneToDo/${token}/nr`;
    fetch(URL_doneToDo)
    .then(res=>res.json())
    .then(data=>
    SetseeDoneToDo(data)
    )
   },[])

    function HandleOnSubmit(){ 
        
        const reset=`http://localhost:4000/ToDo/reset/${listId}/${token}`
        fetch(reset)
    }

    function HandleSearchText(){
      console.log(Nr)
       const testRegEx=`http://localhost:4000/ToDo/testDoneToDo/${searchText}/${token}`
       fetch(testRegEx)
       .then(res=>res.json())
       .then(data=>setDoneRegData(data))
       .then(navigate('/seeDoneToDoRegExData'))

    }

    function HandleSort(){
      const URL_doneToDo=`http://localhost:4000/ToDo/DoneToDo/${token}/${Nr}`;
    fetch(URL_doneToDo)
    .then(res=>res.json())
    .then(data=>
    SetseeDoneToDo(data)
    )
    }
    
   if(token){
    return (
    <>
    <h1>see Done Todo list </h1>
    {seeDoneToDo.map((item,index)=>{
        return <p color="red" key={index}> {item.text}
       
          <form onSubmit={HandleOnSubmit}>
            reset todo  <input type="checkbox" onChange={e=>setListId(item._id)} /><br/>
              <input type="submit" />
          </form>
        </p>
    })} 
    search DonetodoList <input type="text" onChange={(e=>setsearchText(e.target.value))} /> <button onClick={HandleSearchText}> search Text </button><br/><br/>
    sortering <input type="text" onChange={(e=>setNr(e.target.value))} /> <button onClick={HandleSort}> sort text </button> <br/><br/> 
    <Link to={'/see/UserTodos'}> back to your Todos </Link><br/><br/>
    <Link to={'/login'}> <button> logga ut </button> </Link>
    </>
     
    )
  }else {
    return <>
     <h1> logga in för att kunna skriva todo List</h1> 
     <Link to={'/login'}> <button> logga ut </button> </Link>
    </>
 }
}

    