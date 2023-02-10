import React from 'react';
import './SectionServices.scss';

export default function SectionServices() {
  let items=[
    {
      icon: "bi bi-menu-down",
      title: "EASY TO ORDER",
      description: "Choose from daily menu of fresh, healthy meals with just a few clicks. Delivered right to your door."
    },
    {
      icon: "bi bi-truck",
      title: "FASTEST DELIVERY",
      description: "Your daily menu is prepared fresh and delivered straight to your office, so you can enjoy delicious, healthy meals without delay."
    },
    {
      icon: "bi bi-egg-fried",
      title: "QUALITY MEALS",
      description: "Abasto Bistro delivers the highest quality meals, made with fresh ingredients and expertly crafted to satisfy every palate."
    },
  ]
  return (
    <div className='section-services d-flex justify-content-evenly flex-column flex-md-row'>
      {
        items.map((item, i)=>
          <div className='wrapper' key={i}>
            <span className='icon'><i className={item.icon}></i></span>
            <p className='title'>{item.title}</p>
            <p className='description'>{item.description}</p>
          </div>
        )
      }
    </div>
  )
}
