import React from 'react';
// import SEOHead from '../../components/ui/SEOHead';
import Header from '../../components/ui/Header';
import AboutHeroSection from './components/AboutHeroSection';
import MissionVisionSection from './components/MissionVisionSection';
import Footer from '../landing-page/components/Footer';

const AboutPage = () => {
  return (
    <>
      {/*
      <SEOHead
        title="About WhatsApp Marketing Pro - Leading WhatsApp Marketing Solution"
        description="Learn about WhatsApp Marketing Pro's mission to revolutionize business communication. Discover our team, story, and commitment to helping businesses grow through WhatsApp marketing."
        keywords="about whatsapp marketing pro, whatsapp marketing company, business communication, marketing automation team, whatsapp business solution"
        url="https://whatsappmarketingpro.com/about"
        image="/assets/images/about-whatsapp-marketing-pro.jpg"
      />
      */}
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main-content" className="focus:outline-none" tabIndex="-1">
          <AboutHeroSection />
          <MissionVisionSection />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default AboutPage;