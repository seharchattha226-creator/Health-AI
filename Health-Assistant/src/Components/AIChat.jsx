import React, { useState } from "react";

function AIChat() {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi 👋 I’m your AI Health Assistant. Ask me anything about diet & fitness!",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };

    let aiReply = "";

    if (input.toLowerCase().includes("weight loss")) {
      aiReply =
        "Eat fewer carbs, increase protein 🍗 and walk daily 🚶‍♀️";
    } else if (input.toLowerCase().includes("diet")) {
      aiReply =
        "Include fruits 🥗, vegetables 🥦 and drink more water 💧";
    } else if (input.toLowerCase().includes("muscle")) {
      aiReply =
        "Increase protein intake and do strength training 💪";
    } else {
      aiReply =
        "Stay consistent with healthy eating and exercise 🧠💚";
    }

    const aiMessage = { type: "ai", text: aiReply };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1"
          alt="ai chat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-3xl mx-auto flex flex-col h-[80vh]">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          💬 AI Health Chat Assistant
        </h2>

        {/* Chat Box */}
        <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 
                        rounded-2xl p-6 overflow-y-auto space-y-4 shadow-xl">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-3 rounded-2xl max-w-xs text-sm leading-relaxed shadow-md
                ${
                  msg.type === "user"
                    ? "bg-green-500 text-white rounded-br-none"
                    : "bg-white/20 text-white rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="mt-4 flex gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full"
        >

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about diet, fitness..."
            className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none px-3"
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-full 
                       hover:bg-green-600 hover:scale-105 transition"
          >
            Send
          </button>

        </form>

      </div>
    </section>
  );
}

export default AIChat;