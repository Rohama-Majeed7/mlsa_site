import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#010E1B]/90 backdrop-blur-md border-b border-[#55B4F3]/20 ">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50"
        >
          <img src="/logo.png" alt="Logo" className="h-8 sm:h-10 md:h-16 " />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm sm:text-lg font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* <Link
            to="/login"
            className="px-3 sm:px-4 py-2 rounded-full bg-[#55B4F3] text-[#010E1B] font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            Login
          </Link> */}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative z-70 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E1EFFD] shadow-lg shadow-black/20 backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#55B4F3]/50"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slider Menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-y-0 right-0 bg-[#010E1B] z-60 w-[min(88vw,30rem)] transform border-l border-white/10 rounded-l-2xl  transition-transform duration-300 ease-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full rounded-b-2xl flex-col mt-4 bg-[#010E1B] text-[#E1EFFD]">
          <div className=" flex px-2 items-start justify-between rounded-b-2xl border-b border-white/10 ">
            <div>
              <p className="text-lg uppercase tracking-[0.35em] font-bold text-[#55B4F3]/80">MLSA</p>
              <h2 className="text-xl font-semibold text-white">UET Taxila</h2>
            </div>
            {/* <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10  text-[#E1EFFD] transition "
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button> */}
          </div>

          <div className="bg-[#010E1B] p-2 flex flex-col gap-2 rounded-b-2xl">
            <MobileLink to="/" setOpen={setOpen}>Home</MobileLink>
            <MobileLink to="/events" setOpen={setOpen}>Events</MobileLink>
            <MobileLink to="/about" setOpen={setOpen}>About Us</MobileLink>
            <MobileLink to="/contact" setOpen={setOpen}>Contact</MobileLink>
          </div>

        </div>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-[#010E1B]/70 backdrop-blur-sm md:hidden"
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
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-medium text-[#E1EFFD]/90 transition hover:border-[#55B4F3]/40 hover:bg-[#55B4F3]/10 hover:text-white"
    >
      <span>{children}</span>
      <span className="text-[#55B4F3]/80">→</span>
    </Link>
  );
}
