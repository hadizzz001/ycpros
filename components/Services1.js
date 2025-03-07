"use client"; 
import { Box, Typography, Container, Grid } from "@mui/material";
 
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { 
    title: "Quality Craftsmanship", 
    description: "We use high-quality materials and expert techniques to ensure long-lasting results." 
  },
  { 
    title: "Experienced Professionals", 
    description: "Our team has years of experience in landscaping, fencing, and installation services." 
  },
  { 
    title: "Customized Solutions", 
    description: "We tailor every project to match your vision and property’s unique needs." 
  },
  { 
    title: "Reliable & On-Time Service", 
    description: "We pride ourselves on timely project completion and professional service." 
  },
  { 
    title: "Affordable & Transparent Pricing", 
    description: "We offer competitive pricing with no hidden fees, ensuring value for your investment." 
  }
];


 


const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }
};

const ServicesSection = () => {
 

  return (
    <Container sx={{ textAlign: "center", py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2} className="myHead">
        Why Choose Us?
        </Typography>
         
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index} display="flex" justifyContent="center">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
            >
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  backgroundColor: "#1f953d",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow: 3,
                  p: 3,
                  transition: "transform 0.3s ease-in-out"
                }}
              >
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
<div className="mt-40 mb-20">


      <h1 className="myHead">Stay Connected</h1> 
              <p className="mt-2 myP">
              For updates and inquiries, follow our journey as we give brilliant ideas the second chance they deserve.
              </p>
              </div>
    </Container>
  );
};

export default ServicesSection;
