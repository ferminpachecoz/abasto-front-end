import React, {useState} from 'react';
import './Header.scss';
import Slider from "react-slick";

export default function Header() {
  let [display, setDisplay] = useState(false);
  
  return (
    <div className='header row g-0 row-cols-2 justify-content-between align-items-center'>
      <div className='title'>
        <p className='coffee'>Abasto</p>
        <p className='blend'>On The Way</p>
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
        <span><i onClick={()=>setDisplay(!display)} className="bi bi-list"></i></span>
      </div>
      {display &&
        <div className='responsive-menu'>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </div>
      }
    </div>
  )
}
