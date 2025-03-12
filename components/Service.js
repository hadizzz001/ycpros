"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "Sod Installation", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741348644/eojcukhy94ito7pfztnj.jpg" },
  { title: "Fencing", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741348607/ovb8ggmc6alkikfovhsb.jpg" },
  { title: "Deck Installation", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741348475/lrwpyeuzlwtygtpjl0np.jpg" },
  { title: "Decorative Stones", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741348579/sagmnhxdhencftwf7dtp.jpg" },
  { title: "Concrete Slabs Installation", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741348469/vuppm5czw4qisxvmfzkk.jpg" },
  { title: "Retaining Walls Installation", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741779350/ltzzklims7cumjvmqivw.jpg" },
  { title: "Weed Control", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741778889/p5ipfxgsufkigtt8h91b.jpg" },
  { title: "Exposed Concrete Cleaner and Sealer", img: "https://res.cloudinary.com/db87pggzn/image/upload/v1741779486/dfpppeekefjnc0xwqeq7.jpg" },
];

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInImage = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicesGrid = () => {
  return (
    <div className="w-full text-center py-8">
      {/* Title Animation */}
      <motion.h5
        className="myHead"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Discover
      </motion.h5>
      <motion.h1
        className="myHead1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Our Services
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInImage}
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-[33vh] md:h-[50vh] object-cover"
              priority
            />
            {/* Overlay with Title */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white font-bold text-xl text-center px-2">
                {service.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
