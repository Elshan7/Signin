
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'

function App() {

  return (

    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Login/>} />
    <Route path='/signup' element = {<SignUp/>} />
    <Route path="/welcome/:id" element={<Welcome/>} />
    
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
