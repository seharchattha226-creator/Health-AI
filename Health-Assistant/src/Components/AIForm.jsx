import React, { useState } from "react";

function AIForm() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    goal: "",
    activity: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const calories =
      formData.goal === "weight loss"
        ? 1800
        : formData.goal === "muscle gain"
        ? 2800
        : 2200;

    setResult({
      calories,
      water: "2.5 - 3L 💧",
      protein: "70 - 120g 🍗",
      advice:
        formData.goal === "weight loss"
          ? "Reduce sugar & increase cardio 🚶‍♀️"
          : "Maintain balanced diet & stay active 💪",
    });
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="fitness"
          className="w-full h-full object-cover"
        />

        {/* Soft overlay (important fix) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          🧠 AI Health Planner
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-8 
                     shadow-xl grid md:grid-cols-2 gap-6 
                     hover:shadow-green-300/30 hover:-translate-y-1 transition duration-300"
        >

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            className="p-3 rounded-lg border border-gray-200 text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="weight"
            placeholder="Enter Weight (kg)"
            className="p-3 rounded-lg border border-gray-200 text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="height"
            placeholder="Enter Height (cm)"
            className="p-3 rounded-lg border border-gray-200 text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          />

          <select
            name="goal"
            className="p-3 rounded-lg border border-gray-200 text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          >
            <option value="">Select Goal</option>
            <option value="weight loss">Weight Loss</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="maintenance">Maintenance</option>
          </select>

          <select
            name="activity"
            className="p-3 rounded-lg border border-gray-200 text-gray-800 
                       md:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
            required
          >
            <option value="">Activity Level</option>
            <option value="low">Low 🛋️</option>
            <option value="medium">Medium 🚶‍♀️</option>
            <option value="high">High 🏃‍♂️</option>
          </select>

          <button
            type="submit"
            className="md:col-span-2 bg-green-600 text-white py-3 rounded-full 
                       hover:bg-green-700 hover:scale-105 transition shadow-lg"
          >
            Generate AI Plan 🧠
          </button>

        </form>

        {/* RESULT */}
        {result && (
          <div className="mt-10 bg-white/90 backdrop-blur-xl border border-white/30 
                          rounded-2xl p-6 shadow-xl">

            <h3 className="text-2xl font-bold text-green-600 mb-4">
              📊 Your AI Health Plan
            </h3>

            <div className="space-y-2 text-gray-700">

              <p>🔥 Calories: <span className="font-semibold">{result.calories}</span></p>
              <p>💧 Water: <span className="font-semibold">{result.water}</span></p>
              <p>🍗 Protein: <span className="font-semibold">{result.protein}</span></p>

              <p className="mt-4 text-gray-600">
                💡 Advice: {result.advice}
              </p>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default AIForm;