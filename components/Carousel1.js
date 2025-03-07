"use client";

import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image for Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed hidden md:block"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/db87pggzn/image/upload/v1741348607/ovb8ggmc6alkikfovhsb.jpg')",
        }}
      />

      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed md:hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/db87pggzn/image/upload/v1741348607/ovb8ggmc6alkikfovhsb.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 bg-black/50">
        <h1 className="myHead2">Our Services</h1>
        <p className="text-2xl md:text-4xl mt-4">
           
        </p>
      </div>
    </div>
  );
};

export default Banner;
