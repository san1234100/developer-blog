import { Link, Outlet } from "react-router-dom"
import TheNavbar from "./components/TheNavbar"
import HomePage from "./pages/HomePage"


function App() {
 
  return (
    <>
     <TheNavbar/>
     <div>
      <Outlet/>
     </div>
    </>
  )
}

export default App
