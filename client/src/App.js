import {Routes,Route} from 'react-router-dom';
import CreateUser from './models/CreateUser';
import Login from './models/Login';
import SeeUserTodos from './models/SeeUserTodos';
import SkapaToDos from './models/SkapaToDos';
import SeeDoneToDos from './models/SeeDoneToDos';



function App() {   
  return ( 
    <> 
    <div>
      <Routes> 
      <Route path='/' element={< CreateUser />} />
      <Route path='/login' element={< Login /> } />
      <Route path='/SkapaToDos' element={<SkapaToDos />} />
      <Route path='/see/UserTodos' element={< SeeUserTodos />} /> 
      <Route path='/SeeDoneToDos' element={<SeeDoneToDos /> } />
     </Routes>
    </div>
    </> 
  )   
}  
  
export default App;

