import React from 'react';
import './SectionAbout.scss';

export default function SectionAbout() {
  return (
    <div className='section-about'>
      <div className='row g-0 design'>
        <div className='col-12 col-md-6' style={{backgroundImage: "url('food/IMG_8002.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div style={{height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>

          </div>
        </div>
        <div className='col-12 col-md-6' style={{backgroundImage: "url('bg_4.jpg.webp')", backgroundSize: "cover", backgroundPosition: "center"}}>

        </div>
      </div>
      <div className='wrapper'>
        <div className='title'>
          <p className='discover'>discover</p>
          <p className='story'>our story</p>
        </div>
        <div className='description'>
          <p>Abasto Bistro is a premium food service that delivers delicious, healthy, and convenient meals to companies. Our mission is to provide busy professionals with a hassle-free way to enjoy nutritious and flavorful food at work. We understand the importance of variety, which is why we offer daily menus made with fresh, high-quality ingredients. Each week, we deliver a curated selection of dishes that cater to diverse tastes and dietary requirements. With Abasto Bistro, you can be sure that you and your team will have a nourishing and satisfying meal experience every day.</p>
        </div>
      </div>
    </div>
  )
}
