import React from 'react';
import './MainBanner.scss';
import Slider from "react-slick";

export default function MainBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='main-banner' style={{backgroundImage: "url('food/IMG_8000.jpg')"}}>
      <div className='shadow'>
        <div className='wrapper'>
          <p className='subtitle'>Welcome</p>
          <h1 className='title'>Fueling the Workday with Fresh, Delicious Meals</h1>
          <p className='description'>Elevate your workday with Abasto Daily Eats - fresh, nutritious meals delivered daily, bringing variety to your lunch routine.</p>
          <div>
            <button className='button-left'>Order Now</button>
            <button className='button-right'>View Menu</button>
          </div>
        </div>
      </div>
    </div>
  )
}
