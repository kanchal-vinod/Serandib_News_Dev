import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

export default function Navbar() {
    return (

        <nav className="navbar">
        <ul>
            <li className="list-item">
                <Link to="/" className='link'>Home</Link>
            </li>

            <li className="list-item">
                <Link to="/alist" className='link'>Articles</Link>
            </li>

            <li className="list-item">
                <Link to="/about" className='link'>About Us</Link>
            </li>


        </ul>
            
        </nav>
    )
}
