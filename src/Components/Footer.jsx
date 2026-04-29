import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20 pb-10 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-green-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            🧠 HealthAI
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Smart AI health assistant for diet plans, fitness tracking, BMI analysis & personalized nutrition.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "AI Plan", "BMI Calculator", "Meal Plan"].map((item, i) => (
              <li
                key={i}
                className="hover:text-green-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>🥗 AI Diet Suggestions</li>
            <li>🔥 Calorie Tracking</li>
            <li>💬 Health Chat Assistant</li>
            <li>📊 BMI Analysis</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">support@healthai.com</p>
          <p className="text-gray-400 text-sm mt-1">+92 300 0000000</p>

          {/* Icons */}
          <div className="flex gap-4 mt-5">
            <a className="p-2 rounded-full bg-white/10 hover:bg-green-500 hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:scale-110 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-14 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HealthAI. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;