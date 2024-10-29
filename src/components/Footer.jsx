// Footer.js
import React from 'react';


const Footer = () => {
  return (
    
    <footer name="footer" className="flex flex-col items-center p-6 bg-gray-800 text-white">
      <div className="mb-4 text-center">
        <h4 className="text-lg font-semibold mb-3">Follow Us</h4>

        <div className="flex gap-4 justify-center">
          <a href="https://facebook.com" aria-label="Facebook" className="text-white text-2xl hover:text-blue-600">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-white text-2xl hover:text-blue-400">
          <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-white text-2xl hover:text-pink-600">
          <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white text-2xl hover:text-blue-700">
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>


      </div>

      <div className="mb-4 text-center">
        <h4 className="text-lg font-semibold mb-3">Contact Us</h4>

        <div>
          <a href="mailto:info@example.com" aria-label="Email" className="text-white text-2xl hover:text-gray-400">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

      </div>
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Mahesh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
