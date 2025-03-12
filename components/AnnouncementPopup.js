"use client";

import { useState, useEffect } from "react";

export default function AnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return isVisible ? (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center" style={{ zIndex: 9999999999 }}>
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-2xl text-center relative border-4 border-[#1f953d]">
        <button
          className="absolute top-4 right-4 text-gray-700 text-3xl hover:text-gray-900"
          onClick={() => setIsVisible(false)}
        >
          ✖
        </button>
        <h2 className="text-1xl font-extrabold text-[#1f953d]">🎉 SEASON-END LOTTERY! 🎉</h2>
        <p className="mt-6 text-1xl text-gray-800 leading-relaxed">
          As a thank you for trusting us with your yard projects, we’re thrilled to announce a <b>massive $5,000 lottery!</b>  
        </p>
        <p className="mt-4 text-1xl text-gray-800 leading-relaxed">
          One lucky winner will <b>take home $5,000 at the end of the season!</b> It’s our way of showing appreciation for your support.
        </p>
        <button
          className="mt-6 bg-[#1f953d] text-white text-2xl font-semibold px-6 py-3 rounded-lg hover:bg-[#187d30] transition-all"
          onClick={() => setIsVisible(false)}
        >
          Ok!
        </button>
      </div>
    </div>
  ) : null;
}
