import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-16 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        About <span className="text-blue-600">Us</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Appicoders is a creative web development team focused on building
        stunning, high-performance, and fully responsive web applications.
        Our mission is to turn your ideas into digital reality with clean
        code, modern design, and powerful functionality.
      </p>
    </section>
  );
}
