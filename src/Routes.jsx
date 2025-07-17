import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import LandingPage from "pages/landing-page";
import HomePage from "pages/home-page";
import FeaturesPage from "pages/features-page";
import PricingPage from "pages/pricing-page";
import NotFound from "pages/NotFound";
import AboutPage from "pages/about/AboutPage";
import Careers from "pages/careers";
import Press from "pages/press";
import Partners from "pages/partners";
import ContactPage from "pages/contact/ContactPage";
import Status from "pages/status";
import PrivacyPolicy from "pages/privacy-policy";
import TermsConditions from "pages/terms-conditions";
import RefundCancellationPolicy from "pages/refund-cancellation-policy";
import ChatbotFeatures from "pages/chatbot-features";
// import AboutPage from "pages/about";
// import AboutPage from "pages/about/AboutPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your routes here */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/features-page" element={<FeaturesPage />} />
          <Route path="/pricing-page" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/status" element={<Status />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
          <Route path="/chatbot-features" element={<ChatbotFeatures />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;