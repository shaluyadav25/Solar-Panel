import { useState } from "react";
import logo from "../../../assets/logo-solar.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white shadow-lg">

      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center p-4">

        <img src={logo} alt="Logo" className="h-10 sm:h-12" />

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl lg:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-semibold">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden lg:block bg-yellow-500 text-white p-3 rounded-xl"
        >
          Get a Quote
        </a>

      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 p-5 bg-white shadow-lg lg:hidden">

          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>

          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block bg-yellow-500 text-white text-center p-3 rounded-xl"
            >
              Get a Quote
            </a>
          </li>

        </ul>
      )}

    </nav>
  );
};

export default Navbar;
