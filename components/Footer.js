"use client"; 
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import icons

const Section = () => {
  return (
    <div className="section-container" style={{ backgroundColor: '#1f953d', color: '#fff', minHeight: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* Contact Us Section */}
      <section
        className="contact-us"
        style={{
          backgroundColor: 'transparent',
          color: '#fff',
          textAlign: 'center',
          maxWidth: '800px',
          padding: '10px',
          marginTop: '10px',
        }}
      >
        <p>© {new Date().getFullYear()} Yard Care Pros</p>
        
        {/* Social Media Links */}
        <div style={{ marginTop: '10px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="https://www.instagram.com/yard_care_pros" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px' }}>
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1D1eNJmfsA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px' }}>
            <FaFacebook />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Section;
