import React, { useEffect, useState } from "react";

function Hero() {
  const texts = [
    "Smart Diet Plans 🥗",
    "AI Nutrition Advice 🧠",
    "Healthy Lifestyle Tips 💚",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 flex items-center px-6 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          alt="healthy"
          className="w-full h-full object-cover"
        />

        {/* Clean Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-green-400 font-semibold mb-3">
            🧠 AI Powered Health Assistant
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Transform Your <br />
            <span className="text-green-400">Health Journey</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
            {texts[index]}
          </h2>

          <p className="text-gray-300 mb-8 max-w-md">
            Personalized diet plans, calorie tracking, and smart health insights — all in one place.
          </p>

          {/* BUTTONS (FIXED + PREMIUM) */}
          <div className="flex gap-4 flex-wrap">

            <button className="bg-green-500 text-white px-6 py-3 rounded-full 
                               hover:bg-green-600 hover:scale-105 
                               transition duration-300 shadow-lg">
              Get Started
            </button>

            <button className="border border-white/40 text-white px-6 py-3 rounded-full 
                               hover:bg-white hover:text-black 
                               hover:scale-105 transition duration-300">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center md:justify-end">

          <div className="relative group">

            {/* Glow Layer */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 
                            rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500">
            </div>

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-[320px] space-y-4 shadow-xl
                            transition duration-500 group-hover:-translate-y-2">

              <h3 className="text-lg font-semibold text-white">
                🧠 Your AI Plan
              </h3>

              {/* Item 1 */}
              <div className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition">
                <p className="text-sm text-gray-300">Calories</p>
                <h4 className="text-xl font-bold text-green-400">2200 kcal</h4>
              </div>

              {/* Item 2 */}
              <div className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition">
                <p className="text-sm text-gray-300">Water Intake</p>
                <h4 className="text-xl font-bold text-blue-300">2.5L 💧</h4>
              </div>

              {/* Item 3 */}
              <div className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition">
                <p className="text-sm text-gray-300">Protein</p>
                <h4 className="text-xl font-bold text-yellow-300">90g 🍗</h4>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce">
        ↓
      </div>

    </section>
  );
}

export default Hero;