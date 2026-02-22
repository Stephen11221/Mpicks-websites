import React from "react";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Mail } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function PhotographyPortfolio() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: #000;
            color: white;
          }

          .navbar-custom {
            background-color: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
          }

          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 120px 20px 60px;
          }

          .service-card {
            background: #111;
            border: 1px solid #222;
            border-radius: 15px;
            padding: 30px;
            transition: 0.3s ease;
          }

          .service-card:hover {
            transform: translateY(-5px);
          }

          .gallery-img {
            border-radius: 15px;
            height: 250px;
            width: 100%;
            object-fit: cover;
            transition: 0.3s ease;
          }

          .gallery-img:hover {
            transform: scale(1.03);
          }

          .section-dark {
            background-color: #111;
          }

          .btn-custom {
            background-color: #6f42c1;
            border: none;
          }

          .btn-custom:hover {
            background-color: #5a32a3;
          }

          @media (max-width: 768px) {
            .hero-section h1 {
              font-size: 2rem;
            }

            .hero-section p {
              font-size: 1rem;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top border-bottom border-secondary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Photography</a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto text-center">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Gallery", id: "gallery" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="btn btn-link text-white text-decoration-none"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-5 display-md-4 fw-bold mb-4">
            Hi! My name is John. <br /> I’m a Photographer.
          </h1>
          <p className="lead text-secondary px-2">
            Professional photography services for portraits, landscapes, and commercial projects.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 section-dark">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Services</h2>
          <div className="row g-4">
            {[
              { icon: <Camera size={32} />, title: "Portraits", desc: "Capturing personality and emotion." },
              { icon: <ImageIcon size={32} />, title: "Landscapes", desc: "Stunning nature photography." },
              { icon: <Mail size={32} />, title: "Commercial", desc: "Visuals for brands & businesses." },
            ].map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <motion.div whileHover={{ scale: 1.05 }} className="service-card">
                  <div className="mb-3 text-primary">{service.icon}</div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-secondary">{service.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-5">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Latest Projects</h2>
          <div className="row g-4">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="col-12 col-sm-6 col-lg-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={`https://source.unsplash.com/random/600x600?sig=${item}`}
                  alt="Gallery"
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5 section-dark text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">About Me</h2>
          <p className="text-secondary px-3">
            I am a passionate photographer focused on storytelling through creative composition and lighting.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Contact Us</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-custom btn-lg text-white"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>

      <footer className="text-center py-3 border-top border-secondary">
        © 2026 Photography Portfolio. All rights reserved.
      </footer>
    </>
  );
}