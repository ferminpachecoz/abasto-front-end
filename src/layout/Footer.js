import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='col-12 col-md-3 about'>
        <p className='box-title'>About us</p>
        <p className='description'>We deliver daily, healthy meals straight to your door. Join us on our mission to simplify and enhance your wellness.</p>
        <div className='d-flex justify-content-start align-items-center'>
          <span><i class="bi bi-facebook"></i></span>
          <span><i class="bi bi-twitter"></i></span>
          <span><i class="bi bi-instagram"></i></span>
        </div>
      </div>
      <div className='col-12 col-md-3 media'>
        <p className='box-title'>instagram</p>
        <div className='row row-cols-3 g-0'>
          <div className='img-media' style={{backgroundImage: "url('food/IMG_8000.jpg')"}}></div>
          <div className='img-media' style={{backgroundImage: "url('food/IMG_8001.jpg')"}}></div>
          <div className='img-media' style={{backgroundImage: "url('food/IMG_8002.jpg')"}}></div>
          <div className='img-media' style={{backgroundImage: "url('food/IMG_8003.jpg')"}}></div>
          <div className='img-media' style={{backgroundImage: "url('food/IMG_8004.jpg')"}}></div>
          <div className='img-media' style={{backgroundImage: "url('food/IMG_8005.jpg')"}}></div>
        </div>
      </div>
      <div className='col-12 col-md-3 services'>
        <p className='box-title'>services</p>
        <a href="#">cooked</a>
        <a href="#">deliver</a>
        <a href="#">quality foods</a>
        <a href="#">mixed</a>
      </div>
      <div className='col-12 col-md-3 questions'>
        <p className='box-title'>Have questions?</p>
        <div className='d-flex align-items-center'>
          <span className='me-3'><i className="bi bi-geo-fill"></i></span>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className='d-flex align-items-center'>
          <span className='me-3'><i className="bi bi-telephone-fill"></i></span>
          <p>+2 392 3929 210</p>
        </div>
        <div className='d-flex align-items-center'>
          <span className='me-3'><i className="bi bi-envelope"></i></span>
          <p>info@yourdomain.com</p>
        </div>
      </div>
    </div>
  )
}
