import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#010E1B]/90 backdrop-blur-md border-b border-[#55B4F3]/20 shadow-lg">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[#55B4F3]"
        >
          MLSA UET Taxila
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm sm:text-lg font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link
            to="/login"
            className="px-3 sm:px-4 py-2 rounded-full bg-[#55B4F3] text-[#010E1B] font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#55B4F3] focus:outline-none z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slider Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-2/3 bg-[#010E1B] shadow-xl border-r border-[#55B4F3]/20 z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-16 py-3 space-y-6 px-6  bg-[#010E1B]">
          <MobileLink to="/" setOpen={setOpen}>Home</MobileLink>
          <MobileLink to="/events" setOpen={setOpen}>Events</MobileLink>
          <MobileLink to="/about" setOpen={setOpen}>About Us</MobileLink>
          <MobileLink to="/contact" setOpen={setOpen}>Contact</MobileLink>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-4 px-6 py-2 rounded-full bg-[#55B4F3] text-[#010E1B] font-semibold shadow hover:scale-105 transition text-center"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}

/* Desktop NavLink with underline hover */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative group text-[#E1EFFD]/90 hover:text-[#55B4F3] transition"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#55B4F3] transition-all group-hover:w-full"></span>
    </Link>
  );
}

/* Mobile NavLink */
function MobileLink({ to, children, setOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="block text-xl font-medium py-2 text-[#E1EFFD]/90 hover:text-[#55B4F3] transition"
    >
      {children}
    </Link>
  );
}
