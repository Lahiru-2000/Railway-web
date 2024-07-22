import React from 'react'
import { Link } from "react-router-dom";
import home from '../Home/home';
import '../Footer/Footer.css'

export default function footer() {
  return (
    <div className='footer '>
        <div className='footer-main-links'>
          {/* <Link to={home}>Home</Link> */}
          <h4 className='footer-links'>Home</h4>
          <h4 className='footer-links'>Statements</h4>
          <h4 className='footer-links'>About Us</h4>
          <h4 className='footer-links'>Privacy Policy</h4>
        </div>
        <div className='contactus-side'>
          {/* <Link to={home}>Home</Link> */}
          <h4 className='footer-links'>Contact Us</h4>
          <p>
          <ul>
            <li>Telephones : +94 11 4 600 111</li>
            <li>Fax Nos : +94 11 2 446490</li>
            <li>Email : gmr@railway.gov.lk</li>
            <li>Railway Head Office Exchange Number - +94 11 4 600 111</li>
            <li>Fort Railway Station Inquiries - +94 11 2 434215</li>
            <li>Deputy Operating Superintendent -  1971 (Hotline)</li>
            <li>Assistant Transportation Superintendent (Operation) - +94 11 2 692286</li>
          </ul>
          
      




 
          </p>
        </div>
    </div>
  )
}
