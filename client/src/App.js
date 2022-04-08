import {Routes,Route} from 'react-router-dom';
import {useState,createContext} from 'react';
import CreateUser from './models/CreateUser';
//import Create from './models/Create';
import Par from './models/Par';

const context=createContext({})

function App() {   

  const [name,setName]=useState('pelle')
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
      <Route path='/:username/:password' element={<Par />} />
    </Routes>
    </div>
    </> 
    </context.Provider>
  )
  
}

export default App;
export {context}
