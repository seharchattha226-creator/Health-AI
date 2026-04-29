import React, { useState } from "react";

function MealPlan() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState(null);

  const generatePlan = (e) => {
    e.preventDefault();

    if (!goal) return;

    if (goal === "weight loss") {
      setPlan({
        breakfast: "Oats + Banana 🍌",
        lunch: "Grilled Chicken + Salad 🥗",
        dinner: "Vegetable Soup 🥣",
      });
    } else if (goal === "muscle gain") {
      setPlan({
        breakfast: "Eggs + Milk 🥚🥛",
        lunch: "Rice + Chicken + Veggies 🍗",
        dinner: "Protein Shake + Nuts 🥜",
      });
    } else {
      setPlan({
        breakfast: "Fruit Bowl 🍎",
        lunch: "Balanced Rice + Protein 🍱",
        dinner: "Light Salad 🥗",
      });
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          alt="food"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-10">
          🍽️ AI Meal Plan Generator
        </h2>

        {/* FORM */}
        <form
          onSubmit={generatePlan}
          className="bg-white/10 backdrop-blur-xl border border-white/20 
                     rounded-2xl p-8 shadow-xl
                     hover:shadow-green-400/20 transition duration-300"
        >

          <select
            className="w-full p-3 rounded-lg bg-white/10 text-black border border-white/20 
                       focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">Select Your Goal</option>
            <option value="weight loss">Weight Loss</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="maintenance">Maintenance</option>
          </select>

          <button
            type="submit"
            className="bg-green-500 text-white w-full py-3 rounded-full 
                       hover:bg-green-600 hover:scale-105 transition shadow-lg"
          >
            Generate Meal Plan 🧠
          </button>

        </form>

        {/* RESULT */}
        {plan && (
          <div className="mt-10 grid gap-4">

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 
                            p-5 rounded-xl text-white 
                            hover:-translate-y-1 hover:shadow-green-400/20 transition">
              <h3 className="font-bold text-green-400">Breakfast 🍳</h3>
              <p className="text-gray-200">{plan.breakfast}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 
                            p-5 rounded-xl text-white 
                            hover:-translate-y-1 hover:shadow-green-400/20 transition">
              <h3 className="font-bold text-green-400">Lunch 🍗</h3>
              <p className="text-gray-200">{plan.lunch}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 
                            p-5 rounded-xl text-white 
                            hover:-translate-y-1 hover:shadow-green-400/20 transition">
              <h3 className="font-bold text-green-400">Dinner 🥗</h3>
              <p className="text-gray-200">{plan.dinner}</p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default MealPlan;