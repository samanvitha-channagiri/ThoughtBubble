import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"

function App() {


  return (
  <BrowserRouter>
  <Route path='/' Component={<Login/>}/>
  <Route path='/signup' Component={<Register/>}/>
  
  
  </BrowserRouter>
  )
}

export default App
