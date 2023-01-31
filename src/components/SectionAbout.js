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
          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
        </div>
      </div>
    </div>
  )
}
