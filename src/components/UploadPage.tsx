
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = async () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const questionnaire = localStorage.getItem("questionnaire");
    formData.append("questionnaire", questionnaire || "");

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    localStorage.setItem("recommendations", JSON.stringify(data));
    setUploading(false);
    navigate("/results");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-xl font-bold mb-4">Optional: Upload Bloodwork PDF</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="mt-4 bg-black text-white px-4 py-2 rounded">
        {uploading ? "Analyzing..." : "Get Recommendations"}
      </button>
    </div>
  );
}
