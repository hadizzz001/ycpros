import Image from "next/image";

export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      textAlign: "center", 
      backgroundColor: "#f4f4f4", 
      color: "#333" 
    }}>
      <img src="https://res.cloudinary.com/db87pggzn/image/upload/v1741011264/k6od3kwag6gjof3adxwt.jpg" width={250} height={250} alt="" />
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>🚧 Under Construction 🚧</h1>
      <p style={{ fontSize: "1.2rem" }}>We’re working hard to bring you something amazing. Stay tuned!</p>
    </div>
  );
}
