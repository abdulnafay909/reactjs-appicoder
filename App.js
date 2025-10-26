import React, { useState } from "react";
import { motion } from "framer-motion";
import logoImage from "./logo.png";

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
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <img src={logoImage} alt="Appicoders Logo" className="h-10 w-auto cursor-pointer" onClick={() => scrollTo("home")} />
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {["home","about","services","whyus","industries","contact"].map((section) => (
              <span key={section} onClick={() => scrollTo(section)} className="hover:text-red-500 cursor-pointer capitalize">
                {section.replace(/([A-Z])/g, ' $1')}
              </span>
            ))}
          </div>
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-red-500 to-red-400 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition" onClick={() => scrollTo("contact")}>
              Get Started
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col text-center space-y-4 py-4">
              {["home","about","services","whyus","industries","contact"].map((section) => (
                <span key={section} onClick={() => scrollTo(section)} className="hover:text-red-500 cursor-pointer text-gray-700 font-medium capitalize">
                  {section.replace(/([A-Z])/g, ' $1')}
                </span>
              ))}
              <button className="bg-gradient-to-r from-red-500 to-red-400 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition" onClick={() => scrollTo("contact")}>
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
    padding: "160px 24px", // top/bottom padding, left/right padding
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
    src="s5.jpg"
    alt="Background"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",       // adjust background width
      height: "100%",      // adjust background height
      objectFit: "cover",
      zIndex: 0,
      opacity: 1,
    }}
  />

  {/* Overlay Image */}
  <img
    src="s17.jpg"
    alt="Overlay"
    style={{
      position: "absolute",
      top: "10%",           // adjust vertical position
      left: "20%",          // horizontal center
      transform: "translateX(-50%)",
      width: "30%",         // adjust overlay width
      height: "90%",       // adjust overlay height if needed
      zIndex: 10,
    }}
  />

  {/* Text Container */}
  <motion.div
    style={{
      position: "relative",
      zIndex: 20,
      marginTop: "50px",      // adjust top margin for text
      marginBottom: "50px",   // adjust bottom margin
    }}
  >
    <h1
      style={{
        fontSize: "3rem",          // adjust font size
        fontWeight: "800",
        marginBottom: "20px",  
        marginLeft: "33%",    // space between heading and paragraph
        textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
      }}
    >
      Transforming <span style={{ color: "#FFEA61" }}>Ideas</span> into Digital Reality
    </h1>

    <p
      style={{
        maxWidth: "600px",
       // margin: "0 auto 40px",
        marginLeft: "45%" , // space below paragraph
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
        padding: "12px 32px",   // adjust button padding
        borderRadius: "8px", 
        marginLeft: "32%", 
        marginTop: "30px", 
          // adjust button radius
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

  <section
  id="services"
  className="relative py-24 px-6 bg-white"
  style={{
    backgroundImage: 'url(s30.jpg)', // background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay image */}
  <img
    src="s1.jpg"
    alt="Overlay"
    style={{
      position: "absolute",
      top: "50px",        // adjust vertical position
      left: "80%",        // adjust horizontal position
      transform: "translateX(-50%)",
      width: "400px",     // adjust width
      height: "80%",      // adjust height
      opacity: 1,
      zIndex: 0,
    }}
  />

  {/* Heading & Subtext */}
  <div style={{ position: "relative", zIndex: 10, marginBottom: "40px" }}>
    <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#ffffff", textAlign: "left" }}>
      OUR SERVICES
    </h2>
    <p style={{ fontSize: "16px", color: "#ffffff", textAlign: "left", marginTop: "8px" }}>
      Get to know about what we're good at.
    </p>
  </div>

  {/* Two Columns */}
  <div className="max-w-6xl mx-auto flex gap-16" style={{ position: "relative", zIndex: 10 }}>
    {/* Column 1 */}
    <div className="flex flex-col gap-8" style={{ width: '20%' }}>
      <div className="flex items-start gap-4">
        <img src="s16.jpg" alt="Web" style={{ width: '50px', height: '50px' }} />
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
        <img src="s18.jpg" alt="Mobile" style={{ width: '50px', height: '50px' }} />
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
        <img src="s19.jpg" alt="UI/UX" style={{ width: '50px', height: '50px' }} />
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
        <img src="s11.jpg" alt="Artificial Intelligence" style={{ width: '50px', height: '50px' }} />
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
        <img src="s11.jpg" alt="Blockchain Development" style={{ width: '50px', height: '50px' }} />
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
        <img src="s6.jpg" alt="AI" style={{ width: '50px', height: '50px' }} />
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
  {/* Section Heading */}
  <h3 className="text-4xl font-bold mb-4 text-red-500 drop-shadow-lg">Why Choose us?</h3>
  <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
    Because we don’t just build software — we build long-term partnerships that help you scale.
  </p>

  {/* Circle Cards */}
  <div className="flex justify-center items-center gap-10">
    {[
      { title: "Focused Business Approach", desc: "We research plan, an execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.", img: "s19.jpg" },
      { title: "Professional Team", desc: "Our mobile development company has extremely professional & expert mobileapp developers who specialize in 2D, 3D & isometric apps for android, iOS & webapp platforms", img: "s8.jpg" },
      { title: "Flexible Payment Terms", desc: "get your apps developed with most affordable price and with our flexiablepayment terms, you pay as your project progresses", img: "s19.jpg" },
    ].map((item, i) => {
      const isCenter = i === 1; // center circle focus
      return (
        <div key={i} className="flex flex-col items-center">
          {/* Circle with image inside */}
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
            {/* Image inside circle */}
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
            {/* Text inside circle */}
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
      { name: "Healthcare", img: "s19.jpg" },
      { name: "Fintech", img: "s19.jpg" },
      { name: "Education", img: "s19.jpg" },
      { name: "Travel & Tourism", img: "s19.jpg" },
      { name: "E-Commerce", img: "s19.jpg" },
      { name: "Real Estate", img: "s19.jpg" },
    ].map((industry, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition flex items-center gap-4"
      >
        {/* Image next to heading */}
        <img
          src={industry.img}
          alt={industry.name}
          style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }}
        />
        {/* Text */}
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
          {/* Form */}
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-6 text-red-500 drop-shadow-lg text-center md:text-left">Let’s Work Together</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your message has been sent."); e.target.reset(); }}>
              <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
              <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
              <textarea placeholder="Your Message" required rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"/>
              <motion.button type="submit" className="bg-red-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition transform" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>
                Send Message
              </motion.button>
            </form>
          </div>
          {/* Image */}
          <div className="flex-1">
            <img src={logoImage} alt="Contact" className="rounded-xl shadow-lg w-full object-cover"/>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-10 text-center">
        <p className="text-sm mb-2">© {new Date().getFullYear()} Appicoders. All rights reserved.</p>
        <p className="text-gray-500 text-xs">Built with ❤️ by the Appicoders Frontend Team</p>
      </footer>

    </div>
  );
}

export default App;
