import React from 'react';
import image1 from './assets/icon1.png';  e
import image2 from './assets/icon2.png';  
import image3 from './assets/icon3.png';  

const MembershipSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Manage your entire community in a single system
      </h2>
      <p className="text-lg text-gray-500 mb-8 text-center">
        Who is Nextcent suitable for?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
  
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4">
            <img src={image1} alt="Membership Organisations" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Membership Organisations
          </h3>
          <p className="text-gray-600 mt-2">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4">
            <img src={image2} alt="National Associations" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            National Associations
          </h3>
          <p className="text-gray-600 mt-2">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4">
            <img src={image3} alt="Clubs And Groups" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Clubs And Groups
          </h3>
          <p className="text-gray-600 mt-2">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MembershipSection;
