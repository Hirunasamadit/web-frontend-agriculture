import React from 'react';
import NavBar from '../components/common/TopNavigationBar';
import ContactUsImg from '../assets/Images/ContactUsBackground.png';
import ContactForm from '../components/ContactUs/ContactUsForm';

const ContactUs2 = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <ContactForm />
        <img src={ContactUsImg} alt="Contact Us" style={{ marginLeft: '500px' }} />
      </div>
    </>
  );
};

export default ContactUs2;
