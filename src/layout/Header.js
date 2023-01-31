import React from 'react';
import './Header.scss';
import Slider from "react-slick";

export default function Header() {
  return (
    <div className='header'>
      <div className='title'>
        <p className='coffee'>Abasto</p>
        <p className='blend'>bistro</p>
      </div>
      <div className='nav-container'>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">menu</a></li>
          <li><a href="#">services</a></li>
          <li><a href="#">blog</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
      <div className='responsive-nav'>
        <span><i className="bi bi-list"></i></span>
      </div>
    </div>
  )
}
