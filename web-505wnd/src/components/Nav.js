import React from "react"

import { Link } from "gatsby"
import '../scss/components/nav.scss'

export default function Nav() {
    return(
       <>
  
    
      
      <ul className="nav">
        <li className="nav__item"><Link to="/">Home</Link></li>
        <li className="nav__item"> <Link to="#about">About</Link></li>
        <li className="nav__item"><Link to="/contact">Contact</Link></li>
        <li className="nav__item"><Link to="#blog">Blog</Link></li>
      </ul>
    
    
  </>
    )
}