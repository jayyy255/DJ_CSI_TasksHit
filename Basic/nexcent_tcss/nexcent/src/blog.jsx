import React from 'react';
import image1 from './assets/pic2.png';
import image2 from './assets/pic3.png';
import image3 from './assets/pic4.png';

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Caring is the new marketing</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image1} alt="Creating Streamlined Safeguarding Processes with OneRen" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a href="#" className="text-green-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">→</span>
            </a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image2} alt="What are your safeguarding responsibilities and how can you manage them?" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">What are your safeguarding responsibilities and how can you manage them?</h3>
            <a href="#" className="text-green-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">→</span>
            </a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image3} alt="Revamping the Membership Model with Triathlon Australia" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Revamping the Membership Model with Triathlon Australia</h3>
            <a href="#" className="text-green-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
