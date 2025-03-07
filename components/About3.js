"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 p-6">
      {/* Google Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="md:w-1/2"
      >
        <iframe
          src="https://maps.google.com/maps?q=150%20Pineset%20place%20Calgary%20Alberta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          className="rounded-lg shadow-md"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 text-left"
      >
        <h1 className="myHead">Contact</h1>
        <h5 className="myHead1">How to Find Us?</h5>

        <p className="mt-2 flex items-center gap-2 text-lg myP">
          <Mail color="#1f953d" size={20} />
          <a href="mailto:contact@ycpros.co"  >
            contact@ycpros.co
          </a>
        </p>
        <p className="mt-2 flex items-center gap-2 text-lg myP">
          <Phone color="#1f953d" size={20} />
          <a href="tel:+15877032306"  >
            (587) 703-2306
          </a>
        </p>
        <p className="mt-2 flex items-center gap-2 text-lg myP">
          <MapPin color="#1f953d" size={20} /> 150 Pineset Place, Calgary, Alberta T1Y 2Y1
        </p>
      </motion.div>
    </div>
  );
};

export default About;
