import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "AI Plan", "BMI", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white text-lg font-bold shadow-md">
            🧠
          </div>
          <h1 className="text-xl font-semibold tracking-wide text-gray-800">
            Health<span className="text-green-600">AI</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-3 bg-white/60 px-3 py-2 rounded-full shadow-inner">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 rounded-full text-gray-700 hover:bg-green-50 hover:text-green-600 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition">
          Start Free
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-3 transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-5 space-y-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="text-gray-700 hover:text-green-600 transition cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {item}
            </div>
          ))}

          <button className="w-full bg-green-600 text-white py-3 rounded-full">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;