import React, { useState } from "react";
import { motion } from "framer-motion";

// Import all images
import logoImage from "./assets/logo.png";
import s1 from "./assets/s1.jpg";
import s5 from "./assets/s5.jpg";
import s6 from "./assets/s6.jpg";
import s8 from "./assets/s8.jpg";
import s11 from "./assets/s11.jpg";
import s16 from "./assets/s16.jpg";
import s17 from "./assets/s17.jpg";
import s18 from "./assets/s18.jpg";
import s19 from "./assets/s19.jpg";
import s30 from "./assets/s30.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 scroll-smooth bg-gray-50">

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50" style={{ backgroundColor: "#E81626" }}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <img
            src={logoImage}
            alt="Appicoders Logo"
            className="h-10 w-auto cursor-pointer"
            onClick={() => scrollTo("home")}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            {["home","about","services","whyus","industries","contact"].map((section) => (
              <span
                key={section}
                onClick={() => scrollTo(section)}
                className="hover:text-yellow-300 cursor-pointer capitalize"
              >
                {section.replace(/([A-Z])/g, ' $1')}
              </span>
            ))}
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:block">
            <button
              className="bg-white text-red-600 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition"
              onClick={() => scrollTo("contact")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none text-2xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#E81626] shadow-md">
            <div className="flex flex-col text-center space-y-4 py-4">
              {["home","about","services","whyus","industries","contact"].map((section) => (
                <span
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="hover:text-yellow-300 cursor-pointer text-white font-medium capitalize"
                >
                  {section.replace(/([A-Z])/g, ' $1')}
                </span>
              ))}
              <button
                className="bg-white text-red-600 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition"
                onClick={() => scrollTo("contact")}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        style={{
          position: "relative",
          textAlign: "center",
          padding: "160px 24px",
          overflow: "hidden",
          color: "#fff",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Background Image */}
        <img
          src={s5}
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 1,
          }}
        />

        {/* Overlay Image */}
        <img
          src={s17}
          alt="Overlay"
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            transform: "translateX(-50%)",
            width: "30%",
            height: "90%",
            zIndex: 10,
          }}
        />

        {/* Text Container */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 20,
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              marginBottom: "20px",
              marginLeft: "33%",
              textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            Transforming <span style={{ color: "#FFEA61" }}>Ideas</span> into Digital Reality
          </h1>

          <p
            style={{
              maxWidth: "600px",
              marginLeft: "45%",
              color: "#fefefeff",
              fontWeight: "500",
            }}
          >
            Empowering businesses with <strong>scalable</strong> and <strong>high-performance</strong> software solutions.
          </p>

          <motion.button
            style={{
              backgroundColor: "#FFFFFF",
              color: "#FF3B3B",
              fontWeight: "600",
              padding: "12px 32px",
              borderRadius: "8px",
              marginLeft: "32%",
              marginTop: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
          >
            Let’s Talk
          </motion.button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="py-24 text-center px-6" initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariants}>
        <h3 className="text-4xl font-bold mb-6 text-red-500 drop-shadow-lg">Who We Are</h3>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12 text-lg">
          Appicoders is a global software agency crafting digital experiences for startups and enterprises. We combine <span className="text-red-500 font-semibold">innovation</span>, <span className="text-red-500 font-semibold">technology</span>, and <span className="text-red-500 font-semibold">design</span> to build solutions that shape the future.
        </p>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          {[
            { title: "Innovation", desc: "Turning new ideas into impactful solutions." },
            { title: "Integrity", desc: "Transparent, ethical, and reliable collaboration." },
            { title: "Excellence", desc: "Delivering quality beyond expectations." },
          ].map((card, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="w-64 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-red-500 mb-3">{card.title}</h4>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-24 px-6 bg-white"
        style={{
          backgroundImage: `url(${s30})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay image */}
        <img
          src={s1}
          alt="Overlay"
          style={{
            position: "absolute",
            top: "50px",
            left: "80%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "80%",
            opacity: 1,
            zIndex: 0,
          }}
        />
        {/* Heading & Subtext */}
        <div style={{ position: "relative", zIndex: 10, marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#ffffff", textAlign: "left" }}>OUR SERVICES</h2>
          <p style={{ fontSize: "16px", color: "#ffffff", textAlign: "left", marginTop: "8px" }}>
            Get to know about what we're good at.
          </p>
        </div>
        {/* Two Columns */}
        <div className="max-w-6xl mx-auto flex gap-16" style={{ position: "relative", zIndex: 10 }}>
          {/* Column 1 */}
          <div className="flex flex-col gap-8" style={{ width: '20%' }}>
            <div className="flex items-start gap-4">
              <img src={s16} alt="Web" style={{ width: '50px', height: '50px' }} />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffffff', marginBottom: '4px' }}>
                  Custom Mobile Applications
                </h4>
                <p style={{ fontSize: '14px', color: '#ffffffff' }}>
                  iOS, Android and Wearable Apps
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={s18} alt="Mobile" style={{ width: '50px', height: '50px' }} />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffffff', marginBottom: '4px' }}>
                  Custom Web Development
                </h4>
                <p style={{ fontSize: '14px', color: '#ffffffff' }}>
                  Robust Webs, Progressive Web Apps
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={s19} alt="UI/UX" style={{ width: '50px', height: '50px' }} />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffffff', marginBottom: '4px' }}>
                  Augmented Reality
                </h4>
                <p style={{ fontSize: '14px', color: '#ffffffff' }}>
                  Futuristic AR Apps
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8" style={{ width: '45%', marginRight: '30%' }}>
            <div className="flex items-start gap-4">
              <img src={s11} alt="Artificial Intelligence" style={{ width: '50px', height: '50px' }} />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffffff', marginBottom: '4px' }}>
                  Artificial Intelligence
                </h4>
                <p style={{ fontSize: '14px', color: '#ffffffff' }}>
                  Innovative AI & ML Solutions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={s11} alt="Blockchain Development" style={{ width: '50px', height: '50px' }} />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffffff', marginBottom: '4px' }}>
                  E-Commerce
                </h4>
                <p style={{ fontSize: '14px', color: '#ffffffff' }}>
                  Custom Blockchain Solution
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={s6} alt="AI" style={{ width: '50px', height: '50px' }} />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffffff', marginBottom: '4px' }}>
                  MVP development
                </h4>
                <p style={{ fontSize: '14px', color: '#ffffffff' }}>
                  For Startups & Entrepreneurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <motion.section
        id="whyUs"
        className="py-24 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h3 className="text-4xl font-bold mb-4 text-red-500 drop-shadow-lg">Why Choose us?</h3>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          Because we don’t just build software — we build long-term partnerships that help you scale.
        </p>
        <div className="flex justify-center items-center gap-10">
          {[
            { title: "Focused Business Approach", desc: "We research plan, an execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.", img: s19 },
            { title: "Professional Team", desc: "Our mobile development company has extremely professional & expert mobileapp developers who specialize in 2D, 3D & isometric apps for android, iOS & webapp platforms", img: s8 },
            { title: "Flexible Payment Terms", desc: "get your apps developed with most affordable price and with our flexiablepayment terms, you pay as your project progresses", img: s19 },
          ].map((item, i) => {
            const isCenter = i === 1; 
            return (
              <div key={i} className="flex flex-col items-center">
                <div
                  style={{
                    width: "380px",
                    height: "380px",
                    borderRadius: "50%",
                    backgroundColor: isCenter ? "#ffffff" : "#f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: isCenter ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
                    color: isCenter ? "#000000" : "#999999",
                    padding: "16px",
                    textAlign: "center",
                    transition: "all 0.3s",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "8px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "4px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "14px" }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        id="industries"
        className="py-24 text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h3 className="text-4xl font-bold mb-10 text-red-500 drop-shadow-lg">Industries We Serve</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Healthcare", img: s19 },
            { name: "Fintech", img: s19 },
            { name: "Education", img: s19 },
            { name: "Travel & Tourism", img: s19 },
            { name: "E-Commerce", img: s19 },
            { name: "Real Estate", img: s19 },
          ].map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition flex items-center gap-4"
            >
              <img
                src={industry.img}
                alt={industry.name}
                style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }}
              />
              <div>
                <h4 className="text-xl font-semibold mb-2 text-red-500">{industry.name}</h4>
                <p className="text-gray-700 text-sm">
                  Innovative solutions tailored for the {industry.name.toLowerCase()} sector.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-24 px-6" initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariants}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-6 text-red-500 drop-shadow-lg text-center md:text-left">Let’s Work Together</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="border border-gray-300 p-3 rounded-lg" />
              <input type="email" placeholder="Email" className="border border-gray-300 p-3 rounded-lg" />
              <textarea placeholder="Message" className="border border-gray-300 p-3 rounded-lg" rows="5" />
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold">Send Message</button>
            </form>
          </div>
          <div className="flex-1">
            <img src={s17} alt="Contact Illustration" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </motion.section>

    </div>
  );
}

export default App;
