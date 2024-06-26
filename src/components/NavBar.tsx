"use client"
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-lg">Your Logo</span>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="block sm:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            About
          </a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;