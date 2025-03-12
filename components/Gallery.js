import Image from "next/image";

const services = [
    {
      title: "Concrete Slabs Installation",
      description: "Expert installation of durable and stylish concrete slabs.",
      images: [
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791967/eg0l5uiwzlkpcqtuf3ym.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791966/a4rkaefwzquj73llkehq.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791966/g0htm9vyyl2mmjpic8ye.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791965/y6smt58xknhsgm3gfxcj.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791965/g7fmxxuhbkfwrudthj70.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791964/rwxzyvp7vqmrftnkncmu.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791965/zvwdrguo8cwzinqxxfus.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791964/l3yxl0vbzbyavqob9aci.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791964/cigqiw2gunpfiiaguusx.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791963/glggkisn1gjsggyoscfz.jpg",
        "https://res.cloudinary.com/db87pggzn/image/upload/v1741791964/y8z2l3hmtk4d020iukom.jpg",
      ],
    }, 
  ];

const Gallery = () => {
  const allImages = services.flatMap((service) =>
    service.images.map((img) => ({ img, title: service.title }))
  );

  return (
    <div className="container" style={{textAlign: "center"}}>
              <h1 className="myHead center mb-10">Our Gallery</h1> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {allImages.map((item, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[33vh] md:h-[50vh] object-cover"
              loading="lazy"
            /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
