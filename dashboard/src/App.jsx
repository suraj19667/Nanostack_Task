
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>

   <Route path="/" element={<Dashboard />} /> 
   
   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App