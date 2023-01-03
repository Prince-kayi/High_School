import React from 'react'
import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer>
  <p className='text'>Mmabatho school</p>
  <br/>
  <p>For more information about Mmabatho school.Please click the link below</p>
<div className='social-media'>
 <Link to="#"><FaFacebook/></Link>
 <Link to="#"><FaLinkedin/></Link>
 <Link to="#"><FaTwitter/></Link>
 <Link to="#"><FaInstagram/></Link>
 <Link to="#"><FaYoutube/></Link>
 </div>
 <p className='down'>CopyRight by Prince Kayi </p>
 </footer>
      
    </div>
  )
}
export default Footer
