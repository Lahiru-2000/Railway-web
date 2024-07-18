import React from 'react'
import '../Home/home.css'
import NavbarPage from '../Navbar/navbar'
import HomepagePic from '../../Assets/Home-page.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function home() {

    const options = [
        'One Way',  'Return'
      ];

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [counter,  setCounter] = useState(1);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [countertwo,  setCountertwo] = useState(1);

      const handleClick1 = () => {
      
          setCounter(counter + 1);
      };
  
      
      const handleClick2 = () => {
          
          setCounter(counter - 1);
      };
  
      const handleClick3 = () => {
      
        setCountertwo(countertwo + 1);
    };

    
    const handleClick4 = () => {
        
        setCountertwo(countertwo - 1);
    };

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

                    <div className='second-row'>
                        <div className='dropdown-and-person'>
                            <Dropdown options={options}  placeholder='One Way' className='Dropdown-root' />
                        </div>

                        <div className="buttons">
                            Adults
                            <Button onClick={handleClick2}>-</Button>
                                {counter}
                            <Button onClick={handleClick1}>+</Button>
                        </div>
                            
                        <div className="buttons">
                             Children
                            <Button onClick={handleClick4}>-</Button>
                                { countertwo }
                            <Button onClick={handleClick3}>+</Button>
                        </div>
                    </div>
                    

                        <div className='ticket-search-button-div'>
                        <Button className='ticket-search-button'>Search Tickets</Button>
                        </div>
                  
                    
                 
                        

            
                </div>
            </div>
        
            

     
    </div>
  )
}
