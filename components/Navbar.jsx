import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <img src={require("./logo.png")} alt="Appicoders Logo" className="h-10 w-auto" />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-red-500 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <a href="#why Us">Why Us</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <a href="#industries">Industries</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Get Started Button */}
        <button className="bg-gradient-to-r from-red-500 to-red-400 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
