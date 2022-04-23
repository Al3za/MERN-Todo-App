import {Routes,Route} from 'react-router-dom';
import { createContext, useState } from 'react';
import CreateUser from './models/CreateUser';
import Login from './models/Login';
import SeeUserTodos from './models/SeeUserTodos';
import SkapaToDos from './models/SkapaToDos';
import SeeDoneToDos from './models/SeeDoneToDos';
import SeeRegExData from './models/SeeRegExData';
import SeeDoneToDoRegExData from './models/SeeDoneToDoRegExData';

const contex=createContext({})

function App() {   
  const [regData,setRegData]=useState([])
  const [doneRegData,setDoneRegData]=useState([])
  return ( 
    <> 
      <contex.Provider value={{regData,setRegData,doneRegData,setDoneRegData}} >
      <Routes> 
      <Route path='/' element={< CreateUser />} />
      <Route path='/login' element={< Login /> } />
      <Route path='/SkapaToDos' element={<SkapaToDos />} />
      <Route path='/see/UserTodos' element={< SeeUserTodos />} /> 
      <Route path='/SeeDoneToDos' element={<SeeDoneToDos /> } />
      <Route path='/seeRegExData' element={<SeeRegExData/> } />
      <Route path='/seeDoneToDoRegExData' element={< SeeDoneToDoRegExData/> } />
     </Routes>
     </contex.Provider>
    
    </> 
  )   
}  

export {contex};
export default App;

