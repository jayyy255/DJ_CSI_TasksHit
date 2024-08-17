import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './hotel.css';
import img1 from './assets/img2.png';
import img2 from './assets/img3.png';
import img3 from './assets/img4.png';

gsap.registerPlugin(ScrollTrigger);

const hotels = [
  { name: 'Danubius Hotel Regents Park', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img1 },
  { name: 'The Resident Soho', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img2 },
  { name: 'London Bridge Hotel', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img3 },
  { name: 'Hotel X', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img1 },
  { name: 'Hotel Y', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img2 },
  { name: 'Hotel Z', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img3 },
  { name: 'Hotel A', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img1 },
  { name: 'Hotel B', price: '$200', rating: '4.8', location: 'London NW8 7JT England', image: img2 },
];

const Hotel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;


    gsap.to(container, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    });


    const cards = gsap.utils.toArray('.hotel-card');

    gsap.fromTo(cards, 
      { y: 50, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top 80%", 
          end: "bottom top",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <div className='hotel-section'>
      <div className='title'>Our most popular Hotels</div>
      <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <button className='view'>View All</button>

      <div className='hotel-container' ref={containerRef}>
        {[...hotels, ...hotels].map((hotel, index) => (
          <div key={index} className='hotel-card'>
            <img src={hotel.image} alt={hotel.name} className='hotel-image' />
            <div className='hotel-info'>
              <div className='location'>{hotel.location}</div>
              <div className='hotel-name'>{hotel.name}</div>
              <div className='hotel-details'>
                <div className='price'>{hotel.price} Per Night</div>
                <div className='rating'>
                  <span className='stars'>★★★★☆</span>
                  <span className='rating-number'>{hotel.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
