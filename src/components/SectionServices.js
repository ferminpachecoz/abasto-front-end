import React from 'react';
import './SectionServices.scss';

export default function SectionServices() {
  let items=[
    {
      icon: "bi bi-menu-down",
      title: "EASY TO ORDER",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: "bi bi-truck",
      title: "FASTEST DELIVERY",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: "bi bi-egg-fried",
      title: "QUALITY COFFEE",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
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
