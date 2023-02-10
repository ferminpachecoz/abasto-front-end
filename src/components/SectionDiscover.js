import React from 'react';
import './SectionDiscover.scss';

export default function SectionDiscover() {
  return (
    <div className='section-discover row g-0' style={{backgroundImage: "url('bg_4.jpg.webp')"}}>
      <div className='col-12 col-md-5'>
        <div className='title-container'>
          <p className='discover'>Discover</p>
          <p className='menu'>our menu</p>
        </div>
        <div className='description'>
          <p>Abasto Bistro's daily menu is a celebration of fresh, healthy ingredients. Each plate is expertly crafted to deliver the perfect balance of flavor and nutrition, with a focus on wholesome and delicious options that incorporate a variety of vegetables, fish, and meat.</p>
        </div>
        <div className='button-container'>
          <button>View Full menu</button>
        </div>
      </div>
      <div className='col-12 col-md-7 row row-cols-1 row-cols-md-2 g-md-5 g-3 images-container'>
        <div className='col'>
          <div className='image' style={{backgroundImage: "url('food/IMG_8001.jpg')"}}></div>
        </div>
        <div className='col'>
          <div className='image' style={{backgroundImage: "url('food/IMG_8005.jpg')"}}></div>
        </div>
        <div className='col'>
          <div className='image' style={{backgroundImage: "url('food/IMG_8003.jpg')"}}></div>
        </div>
        <div className='col'>
          <div className='image' style={{backgroundImage: "url('food/IMG_8004.jpg')"}}></div>
        </div>
      </div>
    </div>
  )
}
