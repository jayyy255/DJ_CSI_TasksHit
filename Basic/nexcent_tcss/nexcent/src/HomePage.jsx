import React from 'react';
import homepageimg from './assets/pic1.png';

const HomePage = () => {
  return (
    <div className="flex bg-gray-200 w-screen h-[700px]">
     
      <div className="flex flex-col justify-center p-8 w-[60%] h-full">
        <h1 className="text-black text-7xl font-bold">
          Lessons and insights
        </h1>
        <h2 className="text-green-500 text-7xl font-semibold">
          from 8 years
        </h2>
        <p className="mt-4 text-gray-700 text-xl">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="mt-6 bg-green-500 text-white py-1 px-3 w-24 h-11 rounded hover:bg-green-600">
          Register
        </button>
      </div>

     
      <div className="w-1/2 flex items-center justify-center">
        <img src={homepageimg} alt="Right Side Image" className="w-[80%] h-auto object-contain" />
      </div>
    </div>
  );
}

export default HomePage;
