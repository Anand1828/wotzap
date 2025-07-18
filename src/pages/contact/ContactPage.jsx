import React from 'react';
// import SEOHead from '../../components/ui/SEOHead';
import Layout from '../../components/Layout';
import ContactHeroSection from './components/ContactHeroSection';
import ContactFormSection from './components/ContactFormSection';
// import ContactInfoSection from './components/ContactInfoSection';
// import OfficeLocationsSection from './components/OfficeLocationsSection';

const ContactPage = () => {
  return (
    <>
      {/*
      <SEOHead
        title="Contact WhatsApp Marketing Pro - Get in Touch with Our Team"
        description="Contact WhatsApp Marketing Pro for questions, support, or to schedule a demo. We're here to help you succeed with your WhatsApp marketing campaigns."
        keywords="contact whatsapp marketing pro, whatsapp marketing support, get help, schedule demo, customer service"
        url="https://whatsappmarketingpro.com/contact"
        image="/assets/images/contact-whatsapp-marketing-pro.jpg"
      />
      */}
      <Layout>
        <main id="main-content" className="focus:outline-none" tabIndex="-1">
          <ContactHeroSection />
          <ContactFormSection />
          {/* <ContactInfoSection /> */}
          {/* <OfficeLocationsSection /> */}
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;