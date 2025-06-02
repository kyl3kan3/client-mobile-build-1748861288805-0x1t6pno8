
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionnairePage() {
  const [form, setForm] = useState({
    age: "", sleep: "", stress: "", goals: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem("questionnaire", JSON.stringify(form));
    navigate("/upload");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-green-400 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Your Wellness Profile</h1>
      <input name="age" placeholder="Age" onChange={handleChange} className="mb-2 p-2 text-black" />
      <input name="sleep" placeholder="Hours of sleep/night" onChange={handleChange} className="mb-2 p-2 text-black" />
      <input name="stress" placeholder="Stress level (1–10)" onChange={handleChange} className="mb-2 p-2 text-black" />
      <textarea name="goals" placeholder="Your health goals" onChange={handleChange} className="mb-4 p-2 text-black" />
      <button onClick={handleNext} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
        Next: Upload Bloodwork
      </button>
    </div>
  );
}
