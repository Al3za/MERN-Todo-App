import {Routes,Route} from 'react-router-dom';
import {useState,createContext} from 'react';
import CreateUser from './models/CreateUser';
import Login from './models/Login';
import SendUserToMongodb from './models/SendUserToMongodb';
import ValidationLogin from './models/ValidationLogin';
import FetchData from './models/FetchData';

const context=createContext({})

function App() {   

  const [name,setName]=useState(null)
  const [password,setPassword]=useState(null)

  return ( 
    <context.Provider value={{name,setName,password,setPassword}}>
    <>
    <div>
      <h1>{name}</h1>
    </div>  
    <div>
      <Routes>
      <Route path='/' element={< CreateUser />} />
      <Route path='/:username/:password' element={<SendUserToMongodb />} />
      <Route path='/login' element={< Login /> } />
      <Route path='/login/:username/:password' element={< ValidationLogin />}/>
      <Route path='/test' element={<FetchData />} />
    </Routes>
    </div>
    </> 
    </context.Provider>
  )
  
}

export default App;
export {context}
