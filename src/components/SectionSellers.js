import React from 'react';
import './SectionSellers.scss';

export default function SectionSellers() {
  let items=[
    {
      image: "food/IMG_8000.jpg",
      title: "coffee capuccino",
      text: "A small river named Duden flows by their place and supplies",
      price: "5.90"
    },
    {
      image: "food/IMG_8001.jpg",
      title: "coffee capuccino",
      text: "A small river named Duden flows by their place and supplies",
      price: "5.90"
    },
    {
      image: "food/IMG_8006.jpg",
      title: "coffee capuccino",
      text: "A small river named Duden flows by their place and supplies",
      price: "5.90"
    },
    {
      image: "food/IMG_8003.jpg",
      title: "coffee capuccino",
      text: "A small river named Duden flows by their place and supplies",
      price: "5.90"
    },
  ]
  return (
    <div className='section-sellers' style={{backgroundImage: "url('bg_4.jpg.webp')"}}>
      <div className='title-section'>
        <p className='discover'>discover</p>
        <p className='seller'>best coffee sellers</p>
        <p className='description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
        {
          items.map((item, i)=>
            <div className='wrapper'>
              <div className='image' style={{backgroundImage: `url(${item.image})`}}>

              </div>
              <div>
                <p className='title'>{item.title}</p>
                <p className='text'>{item.text}</p>
                <p className='price'>${item.price}</p>
                <div className='d-flex justify-content-center'>
                  <button className='add-button'>add to cart</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
