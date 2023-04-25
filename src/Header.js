import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';


function Header() {

  return (
    
    <div className='header'>
      <div className='header_img'>

        <Link to="/">
          <img className='header_logo'
          src="data:image/png;base64,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"/>
        </Link>
      </div>

      <div className="header_nav">

        <div className='header_option'>
          <Link to="/login">
            <span className='header_option_lineTwo'>
              Log In</span>
          </Link>

        </div>

        <div className='header_option'>
          <Link to="/register">
            <span className='header_option_lineTwo'>Register</span>
          </Link>
          
        </div>

        <div className='header_option'>
          <Link to="/Location">
            <span className='header_option_lineThree'>
              Live Location</span>
          </Link>

        </div>

        <div className='header_option'>
            <span className='header_option_lineFour'>
              Helplines</span>

        </div>
        
      </div>

    </div>
  )
}

export default Header