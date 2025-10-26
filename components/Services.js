import React from "react";
import { Code2, Smartphone, Globe } from "lucide-react"; // icon library

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-20 px-6 md:px-16 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Our <span className="text-blue-600">Services</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Service Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Code2 className="text-blue-600 w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Web Development
          </h3>
          <p className="text-gray-600">
            Build fast, secure, and scalable web applications tailored to your business needs.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Smartphone className="text-blue-600 w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Mobile Apps
          </h3>
          <p className="text-gray-600">
            Deliver stunning cross-platform mobile experiences with React Native and modern tech.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Globe className="text-blue-600 w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            UI/UX Design
          </h3>
          <p className="text-gray-600">
            Craft intuitive, beautiful, and engaging interfaces for web and mobile platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
