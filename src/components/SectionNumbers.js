import React from 'react';
import './SectionNumbers.scss';

export default function SectionNumbers() {
  let items=[
    {
      number: "100",
      title: "Coffee Branches"
    },
    {
      number: "85",
      title: "Number of Awards"
    },
    {
      number: "10,567",
      title: "Happy Customer"
    },
    {
      number: "900",
      title: "Staff"
    },
  ]
  return (
    <div className='section-numbers' style={{backgroundImage: "url('food/IMG_8445.jpeg')"}}>
      <div className='shadow d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
        {
          items.map((item, i)=>
            <div className='wrapper'>
              <span className='icon'><i className="bi bi-egg-fried"></i></span>
              <p className='number'>{item.number}</p>
              <p className='title'>{item.title}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
