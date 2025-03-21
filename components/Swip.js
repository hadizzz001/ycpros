"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Deck Installation",
    description: "Custom deck installation to enhance your outdoor living space.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/xejuwmjyq9pvctzkacog.jpg", 
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/ivq3caartskdftcbgkij.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/sf7nkjnekedc1wpsy468.jpg",
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
  {
    title: "Flower Beds Installation",
    description: "Preparing the soil, selecting plants, and arranging them aesthetically to enhance landscaping.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742073627/jmg5ntxig1kr7lvmffbu.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742073627/mddqwsa2lk5tin37wxpt.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742073628/aiowguekoueakkndii3s.jpg",
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
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742115273/jlvpoumzjoic7coumss7.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742115271/wp2jciohpgf5acuk7yxg.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742115271/kyjg0esfmltetmzlrzst.jpg",
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
    title: "Exposed Concrete Cleaner and Sealer",
    description: "Help remove stains, dirt, and grime while protecting the surface from moisture, wear, and discoloration.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779486/dfpppeekefjnc0xwqeq7.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779486/z6tmjdfjfew1sbbrszrt.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779486/ijvciuhb6htjpfkeh6uy.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779486/fewm50olqz2znvwqv0gq.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779486/xmaistu9udwihrfhp8e7.jpg",
    ],
  },

  {
    title: "Step Stones",
    description: "Expert installation of durable and stylish step stones.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741348469/vuppm5czw4qisxvmfzkk.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741374726/t4obnspy8geekmy2chpd.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742071702/lvman9y4yy6ogzxznomp.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742071701/guxpnj9k7meega8ywahs.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742071701/ysnwireqw0kljco9iztt.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742071701/bg3xexwqchmtijmlwoni.jpg",
    ],
  }, 

  {
    title: "Retaining Walls Installation",
    description: "Prevent erosion and create level areas in landscapes.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779353/gvnk6mzcetaolddzwoe3.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779352/xhyoocudglqymubqgzon.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779352/n2vfkh1sweg9o0v45xdb.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779352/ojlswe8hutkzuq3xlebf.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741779350/ltzzklims7cumjvmqivw.jpg",
    ],
  },
  {
    title: "Weed Control",
    description: "Involves managing unwanted plants to prevent them from competing with crops.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741778889/p5ipfxgsufkigtt8h91b.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741778885/vchki7lwgrllsayc6lyl.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741778885/utkl6usvr5tx26xt04k5.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741778884/cwvtnzjxqmhxbv3langj.jpg",
    ],
  },
  {
    title: "Expert Mulch Installation",
    description: "Ensures proper layering and coverage to enhance soil health, moisture retention, and landscape aesthetics.",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742586973/xfhcllbggqniina5oluy.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742586973/ahipumsurqq06tqeteyt.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742586973/bbxlxjmypzr4q2uvwxxj.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742586973/aoc7b8aac0oxkwwh4xaf.jpg",
      "https://res.cloudinary.com/db87pggzn/image/upload/v1742586973/xrhmoyljbkbj7xrozmhq.jpg",
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
