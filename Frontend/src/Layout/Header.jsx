import { useState } from "react"
import { NavLink } from "react-router-dom"


function Header() {
  
  const[mode,setMode]=useState(true)

  const handleClick=()=>{
    setMode((prev)=> [...prev===true? false : true])
  }

  return (
    <>
    <div className="header">
      <span>logo</span>
      
     <ul className="navbar">
      <NavLink to="/" className="a" ><li >Home</li></NavLink>
      <NavLink to="/TouristPlace" className="a"><li>Tourist Place</li></NavLink>
     </ul>

     <button onClick={handleClick}>{mode? "light":"dark"}</button>
     </div> 
    </>
  )
}

export default Header
