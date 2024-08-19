import React from "react";
import nexcenticon from '../assets/nexcenticon.png';  

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center text-white">
            <img
              src={nexcenticon}
              alt="Nexcent Logo"  // Added alt attribute for accessibility
              className="h-10 mr-3"
            />
            <span className="text-2xl font-semibold">Nexcent</span>
          </div>
          <p className="mt-2">&copy; 2020 Landify UI Kit. All rights reserved.</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i> {/* Ensure Font Awesome is correctly imported */}
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-globe"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Contact us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Help center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Terms of service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Legal
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Stay up to date</h3>
          <form>
            <div className="flex items-center bg-gray-800 rounded-full p-2">
              <input
                type="email"
                className="bg-transparent border-none text-white focus:outline-none focus:ring-0 w-full"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="text-white ml-2 hover:text-gray-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21.99L23 12 2.01 2.01 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
