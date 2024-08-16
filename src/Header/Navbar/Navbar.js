import React from 'react';
import "./Navbar.css";

export default function Navbar({children}) {
  return (
    <div className='navbar-container'>
        <div className="logo">
            <img src="./img/logo.png" alt="" />
            <span>KASUKA</span>
        </div>

        <div className="menu">
            <ul>
                {children}
            </ul>
        </div>

        <div className="btn">
            <a href="#">شروع</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    </div>
  )
}
