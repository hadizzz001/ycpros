import Image from "next/image";

const Logo = () => {
  return (
    <div style={{zIndex: 99999999}} className="fixed  bg-[#fff]  w-full h-30 flex items-center  ">
      <img
        src="https://res.cloudinary.com/db87pggzn/image/upload/v1741272569/kfqmbrw1kknc6wxqcoxy.png"
        alt="Logo"
        width={80}
        height={80}
        
        className=" object-cover"
      />
    </div>
  );
};

export default Logo;
