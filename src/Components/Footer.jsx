import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer sm:footer-horizontal bg-black text-white px-18 py-20">
        <div className="mb-4 w-full">
          <a className="text-xl font-bold">Travel Mate</a>
        </div>

        <nav>
          <h6 className="footer-title text-white">Explore</h6>
          <a className="link link-hover text-gray-300">Destinations</a>
          <a className="link link-hover text-gray-300">Travel Guides</a>
          <a className="link link-hover text-gray-300">Packages</a>
          <a className="link link-hover text-gray-300">Blog</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Partner With Us</h6>
          <a className="link link-hover text-gray-300">Become a Travel Agent</a>
          <a className="link link-hover text-gray-300">List Your Services</a>
          <a className="link link-hover text-gray-300">Affiliate Program</a>
          <a className="link link-hover text-gray-300">Support</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-blue-400"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-red-600"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184C16.011 2.938 7.984 2.939 4.385 3.184 0.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 15.999v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-blue-600"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .597 0 1.333v21.333C0 23.403.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.403 24 22.667V1.333C24 .597 23.404 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>

      <aside className="footer footer-center text-base-content bg-black p-2 border-t border-base-200 text-gray-400">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by Travel Mate</p>
      </aside>
    </div>
  );
};

export default Footer;
