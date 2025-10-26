import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 mt-20">
        Build Modern Web Apps with <span className="text-blue-600">Appicoders</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mb-6">
        We design and develop innovative web and mobile solutions for your business.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
