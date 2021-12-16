import React from 'react'
import {FaApple} from  'react-icons/fa';
import headerImage from '../assets/header.jpg'

const header = () => {
    return (
        <div id='header' className='pt-5'>
            <h1 className='top-text mt-5 pt-4 d-flex align-contents-center justify-content-center'><FaApple/>PLUG</h1>
            <p>Our lightest product ever.</p>
           <div>
            <img className='header-picture' src={`${process.env.PUBLIC_URL}/images/header.jpg`} class="d-block w-100" alt="..."/> 
          </div>  
        </div>
    )
}

export default header
