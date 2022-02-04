import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import {ImMenu} from 'react-icons/im'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
            <Link to="/"><li className="items">Home</li></Link>             
            <li className="items">Services</li>
            <li className="items">Contact</li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn"><ImMenu/></button>
    </nav>
  )
}