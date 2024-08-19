import React from 'react';
import img from './assets/pic5.png'

function learnmore() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img 
          src={img}
          alt="Membership Section" 
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
          Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed 
          porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default learnmore;
