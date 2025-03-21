import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '../components/header';
import Logo from '../components/Logo';
import AnnouncementPopup from '../components/AnnouncementPopup';


 

export const metadata: Metadata = {
  title: "Yard Care Pros",
  description: "Yard Care Pros",
  openGraph: {
    title: "Yard Care Pros",
    description: "Yard Care Pros",
    images: [
      "https://res.cloudinary.com/db87pggzn/image/upload/v1741272569/kfqmbrw1kknc6wxqcoxy.png",
    ],
  },
  icons: {
    icon: "https://res.cloudinary.com/db87pggzn/image/upload/v1741272569/kfqmbrw1kknc6wxqcoxy.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      	<link property="stylesheet" rel='stylesheet' id='greenthumb-font-Shabrina-css'
		href='wp-content/themes/greenthumb/css/font-face/Shabrina/stylesheet.css@ver=6.7.1.css' type='text/css'
		media='all' />
</head>
    
      <body >
      <AnnouncementPopup />
        <Logo />
        <Header />
        {children}
      </body>
    </html>
  );
}
