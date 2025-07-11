import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowAltCircleRight } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY) {
            gsap.to(navbarRef.current, { y: "-100%", duration: 0.3, ease: "power2.out" });
          } else if (currentScrollY < lastScrollY) {
            gsap.to(navbarRef.current, { y: "0%", duration: 0.3, ease: "power2.out" });
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <nav
      ref={navbarRef}
      className="bg-white sticky top-0 z-50 rounded-bl-lg rounded-br-lg"
    >
      <div className="w-11/12 mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-darkPurple uppercase">
          SS OVERSEAS
        </Link>

        {/* Centered nav links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <Link to="/services" className="text-black hover:text-primary">Services</Link>
          <Link to="/courses" className="text-black hover:text-primary">Courses</Link>
          <Link to="/universities" className="text-black hover:text-primary">Universities</Link>
          <Link to="/about" className="text-black hover:text-primary">About Us</Link>
        </div>

        {/* Contact button */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-darkPurple text-black px-6 py-2 rounded-[1rem] hover:bg-primary-dark transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light select-none cursor-pointer"
          >
            Contact
            <FaArrowAltCircleRight className="text-darkPurple" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden ml-4">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white px-8 pb-4 pt-2 flex flex-col items-start text-left transition-all duration-300 ease-in-out space-y-3 border-t border-gray-200 shadow-lg rounded-b-lg"
        >
          <Link onClick={toggleMenu} to="/services" className="text-black hover:text-primary">Services</Link>
          <Link onClick={toggleMenu} to="/courses" className="text-black hover:text-primary">Courses</Link>
          <Link onClick={toggleMenu} to="/universities" className="text-black hover:text-primary">Universities</Link>
          <Link onClick={toggleMenu} to="/about" className="text-black hover:text-primary">About Us</Link>
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="w-full bg-primary text-white py-2 px-4 rounded-[1rem] hover:bg-primary-dark transition duration-300 text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
