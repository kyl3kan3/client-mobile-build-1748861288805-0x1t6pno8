
import React from "react";

export default function ResultsPage() {
  const data = JSON.parse(localStorage.getItem("recommendations") || "[]");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Your Personalized Supplement Plan</h1>
      <ul className="space-y-2 list-disc pl-6">
        {data.length > 0 ? data.map((item, i) => (
          <li key={i}>{item}</li>
        )) : <li>No results found.</li>}
      </ul>
    </div>
  );
}
