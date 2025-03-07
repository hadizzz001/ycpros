import Image from "next/image";
 
import Carousel from "../components/Carousel";
import Service from "../components/Service";
import About from "../components/About"; 
import About3 from "../components/About3"; 
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
 
      
      <Carousel />
      <About />  
      <Service /> 
      <About3 /> 
      <Footer /> 

    </>

  );
}
