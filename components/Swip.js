"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Concrete Slabs Installation",
    description: "Expert installation of durable and stylish concrete slabs.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741348469/vuppm5czw4qisxvmfzkk.jpg",
    ],
  },
  {
    title: "Deck Installation",
    description: "Custom deck installation to enhance your outdoor living space.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/xejuwmjyq9pvctzkacog.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/t4obnspy8geekmy2chpd.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/ivq3caartskdftcbgkij.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/sf7nkjnekedc1wpsy468.jpg",
    ],
  },
  {
    title: "Decorative Stones",
    description:
      "Enhancing landscapes with decorative stone features for a unique touch.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374862/va8kvp4kzyvaigqju5yx.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374862/dt24dfwrw9h2mnnexhoc.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374861/axqzw1wqpaefqzdwzyon.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374861/b1crqqajqoqkoynzc3tf.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374861/itwf0rvfopqpzcagpexr.jpg",
    ],
  },
  {
    title: "Fencing",
    description:
      "High-quality fence installation for privacy, security, and aesthetics.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374975/kuarzsgudy081juwkquy.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374976/gjqxbikdsfrfqgbuxx1e.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374976/zoaacznzmkxqknqz4pv0.jpg",
    ],
  },
  {
    title: "Sod Installation",
    description: "Professional sod installation for a lush and healthy lawn.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741375055/bmdvavpr6qdbuym4o9la.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741375055/k6nhajcbn2qnzf88sioi.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741375055/w2pjxpav0tfmiqdnlx3i.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741375054/q0856me7fnqtth8a71tl.jpg",
    ],
  },
];

const ServicesSwiper = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 mt-10 myHead">
        Our Services
      </h2>
      {services.map((service, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-xl font-semibold text-center mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-center mb-4">{service.description}</p>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-lg shadow-md bg-white"
          >
            {service.images.map((image, imgIndex) => (
              <SwiperSlide key={imgIndex} className="flex justify-center">
                <img
                  src={image}
                  alt={`${service.title} ${imgIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default ServicesSwiper;
