import React, { useState } from "react";

function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!weight || !height) return;

    const h = height / 100;
    const result = weight / (h * h);

    setBmi(result.toFixed(1));

    if (result < 18.5) setStatus("Underweight");
    else if (result < 24.9) setStatus("Normal");
    else if (result < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  const getStatusColor = () => {
    if (status === "Normal") return "text-green-400";
    if (status === "Underweight") return "text-yellow-300";
    if (status === "Overweight") return "text-orange-400";
    return "text-red-400";
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
  src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1600&q=80"
  alt="fitness"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-10">
          📊 BMI Calculator
        </h2>

        {/* FORM CARD */}
        <form
          onSubmit={calculateBMI}
          className="bg-white/10 backdrop-blur-xl border border-white/20 
                     rounded-2xl p-8 grid gap-6 shadow-xl
                     hover:shadow-green-400/20 hover:-translate-y-1 transition duration-300"
        >

          <input
            type="number"
            placeholder="Enter Weight (kg)"
            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 
                       focus:outline-none focus:ring-2 focus:ring-green-400"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Height (cm)"
            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 
                       focus:outline-none focus:ring-2 focus:ring-green-400"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-3 rounded-full 
                       hover:bg-green-600 hover:scale-105 transition shadow-lg"
          >
            Calculate BMI
          </button>

        </form>

        {/* RESULT */}
        {bmi && (
          <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 
                          rounded-2xl p-6 shadow-xl text-white">

            <h3 className="text-2xl font-bold mb-3">
              Your BMI Result
            </h3>

            <p className="text-5xl font-bold text-green-400 mb-2">
              {bmi}
            </p>

            <p className={`text-xl font-semibold ${getStatusColor()}`}>
              {status}
            </p>

          </div>
        )}

      </div>
    </section>
  );
}

export default BMI;