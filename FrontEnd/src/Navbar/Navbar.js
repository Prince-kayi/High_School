import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaAngleRight,FaBars } from 'react-icons/fa';
import "./Navbar.css"
import "../Main/Apply.css"
const Header = () => {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <header className='nav-header'>
            <button className='side-bar' onClick={() => setShowLinks(!showLinks)}><FaBars className='bars'/></button>
            <div className='nav-logo'>
                <h1>
                    <Link to="/" className='logo'>Mmabatho</Link>
                </h1>
                <div className='search-container'>
                    <div className='search-group'>
                        <input
                            type="text"
                            name='search'
                            placeholder='Type to Search...'
                            className='search-in'
                        />
                        <Link to="/searching"><i class="fas fa-search" /></Link>
                    </div>

                </div>
            </div>
            <div className='nav-links' id={showLinks ? "hiidden" : ""}>
                <ul>
                    <li >
                        <Link to="#">Apply  &nbsp;&nbsp;&nbsp;<i class="fas fa-angle-down" />
                            <div className='sub-menu-1'>
                                <ul>
                                    <li><Link to="/phase">Senior Phase</Link></li>
                                    <li><Link to="/fet">FET</Link></li>
                                    <li className='hovers-me'><Link to="#">Admissions </Link><FaAngleRight className='angle' />
                                        <div className='sub-menu-3'>
                                            <ul>
                                                <li className='top'><Link to="/academic">Academic Requirements</Link></li>
                                                <li><Link to="/process">Enrollment Process</Link></li>
                                                <li><Link to="/cost">Cost and Subside</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div> </Link>
                    </li>
                </ul>
                <ul>
                    <li >
                        <Link to="#">Arts&nbsp;&nbsp;<i class="fas fa-angle-down" />
                            <div className='sub-menu-2'>
                                <ul>
                                    <li><Link to="/netbal">Netball</Link></li>
                                    <li><Link to="/footba">Football</Link></li>
                                </ul>
                            </div></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/about">About&nbsp;&nbsp;&nbsp; </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/contact">Contact Us&nbsp;&nbsp;&nbsp;</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/faq">FAQ&nbsp;&nbsp;&nbsp; </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/sign-in">Sign in&nbsp;&nbsp;&nbsp;<i class="fas fa-user" /> </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header
