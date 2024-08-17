import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer'>
      <div className='infof'>
        <p id='lore'>Lorem Ipsum is simply dummy text
of the printing and typesetting
industry.</p>
<div className='button-container'>
<button className='fb'></button>
<button className='insta'></button>
<button className='gg'></button>
</div>
</div>
<div className='home'>
  <p id='hom'>Home</p>
  <p>Booking</p>
  <p>Facilities</p>
  <p>Location</p>
  <p>contact</p>
</div>

<div className='help'>
  <p id='hel'>Help</p>
  <p>About Us</p>
  <p>Privacy policy</p>
  <p>FAQs</p>
  
</div>

<div className='getapp'>
  <p id='getap'>Get the app</p>
  <p>IOS app</p>
  <p>Android app</p>
  
  
</div>

    </div>
  )
}

export default footer