import React from 'react';
import arrowicon from '../assets/arrowicon.png'; // Import the arrow icon image

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <nav className="flex items-center w-full">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-xl">Nexcent</span>
          <div className="flex gap-4">
            <a href="#home" className="text-black font-bold hover:text-blue-500">Home</a>
            <a href="#features" className="text-black font-bold hover:text-blue-500">Features</a>
            <a href="#community" className="text-black font-bold hover:text-blue-500">Community</a>
            <a href="#blog" className="text-black font-bold hover:text-blue-500">Blog</a>
            <a href="#pricing" className="text-black font-bold hover:text-blue-500">Pricing</a>
          </div>
        </div>
        <a href="#register" className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Register Now
          <img src={arrowicon} alt="Register Now" className="w-5 h-5 ml-2" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
