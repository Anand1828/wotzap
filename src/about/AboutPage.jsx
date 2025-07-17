import React from 'react';
import SEOHead from '../../components/ui/SEOHead';
import Header from '../../components/ui/Header';
import AboutHeroSection from './components/AboutHeroSection';
import TeamSection from './components/TeamSection';
import CompanyStorySection from './components/CompanyStorySection';
import MissionVisionSection from './components/MissionVisionSection';
import AchievementsSection from './components/AchievementsSection';
import FooterSection from '../landing-page/components/FooterSection';

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About Wotzap - Leading WhatsApp Marketing Solution"
        description="Learn about Wotzap's mission to revolutionize business communication. Discover our team, story, and commitment to helping businesses grow through WhatsApp marketing."
        keywords="about wotzap, whatsapp marketing company, business communication, marketing automation team, whatsapp business solution"
        url="https://wotzap.com/about"
        image="/assets/images/about-wotzap.jpg"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main-content" className="focus:outline-none pt-16 lg:pt-20" tabIndex="-1">
          <AboutHeroSection />
          <CompanyStorySection />
          <MissionVisionSection />
          <AchievementsSection />
          <TeamSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
};

export default AboutPage;