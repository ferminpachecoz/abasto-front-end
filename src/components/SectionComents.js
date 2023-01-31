import React from 'react';
import './SectionComents.scss';

export default function SectionComents() {
  let items=[
    {
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_2.jpg",
      opacity: "1"
    },
    {
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_3.jpg",
      opacity: "0.9"
    },
    {
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_2.jpg",
      opacity: "1"
    },
    {
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_3.jpg",
      opacity: "0.9"
    },
    {
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_2.jpg",
      opacity: "1"
    },
  ]
  return (
    <div className='section-coments' style={{backgroundImage: "url('bg_1.jpg.webp')"}}>
      <div className='d-flex justify-content-center'>
        <div className='title-container'>
          <p className='testimony'>Testimony</p>
          <p className='customer'>customer says</p>
          <p className='description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className='testimony-container row row-cols-1 row-cols-md-5 g-0 align-items-end'>
        {
          items.map((item, i)=>
            <div className='wrapper col' style={{opacity: `${item.opacity}`}} key={i}>
              <p>"{item.text}"</p>
              <div className='d-flex justify-content-evenly'>
                <span className='image' style={{backgroundImage: `url(${item.image})`}}></span>
                <div>
                  <p className='username'>{item.name}</p>
                  <p className='work'>{item.work}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
