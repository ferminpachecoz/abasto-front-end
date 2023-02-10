import React from 'react';
import './SectionComents.scss';

export default function SectionComents() {
  let items=[
    {
      text: "The best of all worlds: fresh vegetables, juicy meats, succulent fish, fluffy rice, juicy pork, and delicious crab - all in one convenient meal delivery service.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_2.jpg",
      opacity: "1"
    },
    {
      text: "Abasto Bistro is simply amazing! The daily menu of fresh vegetables, fish, meat, rice, pork, and crab is delicious and so well balanced. The delivery is fast and the service is exceptional.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_3.jpg",
      opacity: "0.9"
    },
    {
      text: "Healthy and delicious food, fast and efficient service. Highly recommended!",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_2.jpg",
      opacity: "1"
    },
    {
      text: "The daily delivery of fresh, healthy meals is always on time and packed with flavor. The variety of options and excellent service makes this a top choice for healthy eating.",
      name: "Louise Kelly",
      work: "Illustrator Designer",
      image: "https://preview.colorlib.com/theme/coffeeblend/images/person_3.jpg",
      opacity: "0.9"
    },
    {
      text: "This food delivery service is a game changer! The daily menu is healthy, delicious and conveniently delivered right to your door. Highly recommended for anyone looking for a better, easier way to eat well.",
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
