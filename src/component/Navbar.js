import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' >TRVL <i className='fab fa-typo3' /></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        <ul className={click ? 'nav - menu active' : 'nav-menu'}>
                            <li className="navitem">
                                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="navitem">
                                <Link to="/services" className='nav-links' onClick={closeMobileMenu}>Services</Link>
                            </li>
                            <li className="navitem">
                                <Link to="/products" className='nav-links' onClick={closeMobileMenu}>Products</Link>
                            </li>
                            <li className="navitem">
                                <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>




    )
}
