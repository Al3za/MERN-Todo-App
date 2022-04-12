import {Routes,Route} from 'react-router-dom';
import CreateUser from './models/CreateUser';
import Login from './models/Login';
import SkapaToDos from './models/SkapaToDos';


function App() {   

  return ( 
    
    <> 
    <div>
      <Routes>
      <Route path='/' element={< CreateUser />} />
      <Route path='/login' element={< Login /> } />
      <Route path='/SkapaToDos' element={<SkapaToDos />} />
    </Routes>
    </div>
    </> 
  
  ) 
   
}

export default App;

