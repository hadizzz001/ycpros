"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 p-6">
      {/* Text Section - Fades Down */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-full text-center"
        style={{ textAlign: "left" }}
      >
        <h1 className="myHead">Introduction</h1> 
        <p className="mt-2 myP">
        At Yard Care Pros, we take pride in transforming outdoor spaces into stunning, functional landscapes. Based in Pineset Place, Calgary, Alberta, we specialize in a wide range of services, including sod and sod installation, custom flower beds, exquisite stone decorations, deck building, and fencing. Our team is dedicated to delivering top-quality craftsmanship and personalized solutions to enhance the beauty and value of your property. Whether you're looking for a lush green lawn, elegant stone features, or a well-built deck and fence, Yard Care Pros is here to bring your vision to life. Let us create the perfect outdoor oasis for you!
        </p>
      </motion.div>

 
    </div>
  );
};

export default About;
