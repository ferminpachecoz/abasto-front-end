import React from 'react';
import './Book.scss';

export default function Book() {
  let items=[
    {
      icon: "bi bi-telephone-fill",
      title: "000 (123) 456 7890",
      description: "A small river named Duden flows by their place and supplies."
    },
    {
      icon: "bi bi-geo-alt-fill",
      title: "198 West 21th Street",
      description: "203 Fake St. Mountain View, San Francisco, California, USA"
    },
    {
      icon: "bi bi-clock-fill",
      title: "Open Monday-Friday",
      description: "8:00am - 9:00pm"
    }
  ]
  return (
    <div className='book-container'>
      <div className='content'>
        {
          items.map((item, i)=>  
            <div className='blocks'>
              <span className='icon'><i className={item.icon}></i></span>
              <div className='info'>
                <p className='title'>{item.title}</p>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          )
        }
      </div>
      <div className='book-content'>
        <p className='title'>Book a table</p>
        <form>
          <div className='d-flex justify-content-evenly flex-column flex-sm-row'>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <div className='d-flex justify-content-evenly flex-column flex-sm-row'>
            <input type="date" />
            <input type="time" />
            <input type="text" placeholder='Phone' />
          </div>
          <div className='d-flex justify-content-evenly flex-column flex-sm-row'>
            <input type="text" placeholder='Message' />
            <button>Appointment</button>
          </div>
        </form>
      </div>
    </div>
  )
}
