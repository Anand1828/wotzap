import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import Header from '../../components/ui/Header';
import Footer from '../landing-page/components/Footer';
import FloatingActionMenu from '../../components/ui/FloatingActionMenu';
import StickyProgressBar from '../../components/ui/StickyProgressBar';
import PricingHero from './components/PricingHero';
import PricingCards from './components/PricingCards';
import VolumeCalculator from './components/VolumeCalculator';
import FeatureComparison from './components/FeatureComparison';
import ROICalculator from './components/ROICalculator';
import EnterpriseSection from './components/EnterpriseSection';
import PricingFAQ from './components/PricingFAQ';
// import CustomerStories from './components/CustomerStories';
import PricingCTA from './components/PricingCTA';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [isAnnual, setIsAnnual] = useState(false);
  const [openBookDemoModal, setOpenBookDemoModal] = useState(() => () => {});

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Layout getOpenBookDemoModal={setOpenBookDemoModal}>
      <Helmet>
        <title>Pricing - Wotzap | Flexible Plans for Every Business</title>
        <meta 
          name="description" 
          content="Choose the perfect Wotzap plan for your business. Starter, Professional, and Enterprise options with transparent pricing and no hidden fees." 
        />
        <meta name="keywords" content="Wotzap pricing, business messaging costs, WhatsApp API pricing, marketing automation plans" />
        <meta property="og:title" content="Pricing - Wotzap" />
        <meta property="og:description" content="Flexible pricing plans for WhatsApp marketing success. Demo Free available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wotzap.com/pricing-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Wotzap" />
        <meta name="twitter:description" content="Transparent pricing for WhatsApp marketing. Choose your plan and start demo free." />
        <link rel="canonical" href="https://wotzap.com/pricing-page" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "name": "WhatsApp Marketing Pro Pricing",
            "description": "Flexible pricing plans for WhatsApp marketing automation",
            "priceCurrency": "USD",
            "price": "29",
            "billingPeriod": "Monthly",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "unitText": "Monthly subscription"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Navigation - included in Layout */}
        {/* Progress Indicator */}
        <StickyProgressBar />
        {/* Main Content */}
        <main className="">
          {/* Hero Section */}
          <PricingHero isAnnual={isAnnual} setIsAnnual={undefined} openBookDemoModal={openBookDemoModal} />
          {/* Pricing Cards */}
          <PricingCards selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
          {/* Volume Calculator */}
          <VolumeCalculator isAnnual={isAnnual} />
          {/* Feature Comparison */}
          <FeatureComparison isAnnual={isAnnual} openBookDemoModal={openBookDemoModal} />
          {/* ROI Calculator */}
          <ROICalculator openBookDemoModal={openBookDemoModal} />
          {/* Enterprise Section */}
          <EnterpriseSection />
          {/* Customer Stories */}
          {/* <CustomerStories /> */}
          {/* FAQ */}
          {/* Final CTA */}
          <PricingCTA openBookDemoModal={openBookDemoModal} />
        </main>
        {/* Footer - included in Layout */}
        {/* Floating Action Menu - included in Layout */}
      </div>
    </Layout>
  );
};

export default PricingPage;