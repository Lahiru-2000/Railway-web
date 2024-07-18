import React from 'react'
import '../Home/home.css'
import NavbarPage from '../Navbar/navbar'
import HomepagePic from '../../Assets/Home-page.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from 'react-bootstrap/Button';


export default function home() {

    const options = [
        'One Way',  'Return'
      ];

  return (
    <div className='home-page'>
        <NavbarPage/>
       
            <img src={HomepagePic} className='home-page-wallpaper' />
       
      
    
      
            <div className='ticket-search-form'>
                <div className='ticket-inputs-raw'>
                    <div className='ticket-inputs'>
                        <input type='Text' className='ticket-search-input' placeholder='From'/>
                        <input type='Text' className='ticket-search-input' placeholder='To'/>
                        <input type='Date' className='ticket-search-input' />
                       
                    </div>
                    <br/>
                    <div className='dropdown-and-person'>
                        <Dropdown options={options}  placeholder='One Way' />
                        <input type='Text' />
                        <input type='Text' />
                    </div>

                    <div className='ticket-search-button-div'>
                    <Button className='ticket-search-button'>Search Tickets</Button>
                    </div>
                 
                        

            
                </div>
            </div>
        
            

     
    </div>
  )
}
