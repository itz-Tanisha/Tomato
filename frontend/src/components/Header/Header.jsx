import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Header = () => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='header'>
        <div className="header-contents">
            
            <h1>Order your <span>favourite food</span> here</h1>
            <p>Choose from a diverse menu featuring an array of mouthwatering delieghful dishes crafted with the finest detail. </p>
            {/* <button>View Menu</button> */}
            
            <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>View Menu</a>
            
            
            
        </div>
    </div>
  )
}

export default Header

/* Basically in this components I have defined the first part of landing page

    - Text 
    - Order and View Menu Button

*/