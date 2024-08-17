import React from 'react';
import './home.css'; 
import bgimg from './assets/img4.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-content">
        <h1>Find your perfect place to stay</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.</p>
        <h2 className='wv'>Watch Video</h2>
        <button className='play'></button>
      
      </div>
      <div className="image-container">
        <img src={bgimg} alt="Descriptive Text" />
      </div>
      
    </div>
  );
}

export default Home;
