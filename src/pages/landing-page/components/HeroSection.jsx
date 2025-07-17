import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const HeroSection = ({ openBookDemoModal }) => {
  const [businessCount, setBusinessCount] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-primary-200 mb-6">
              <Icon name="Shield" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">WhatsApp Business Solution Provider</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Reach Your Customers{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Where They Are
              </span>
              <br />
              <span className="text-primary">WhatsApp</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-text-secondary mb-8 max-w-2xl">
              Get 10x Higher Engagement Than Email with Official WhatsApp Business API Integration. 
              Turn your customer conversations into sales with automated marketing campaigns.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                iconName="Zap"
                iconPosition="left"
                className="shadow-cta text-lg px-8 py-4"
                onClick={openBookDemoModal}
              >
                Demo Free
              </Button>
            </div>

            {/* Trust Counter */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="font-semibold text-text-primary">{businessCount.toLocaleString()}+</span>
                <span>businesses trust us</span>
              </div>
              <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" size={16} className="text-accent fill-current" />
                ))}
                <span className="ml-1 font-semibold">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={24} />
                  <span className="font-semibold">WhatsApp Marketing Pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Live</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-success-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-success-600 font-medium">Messages Sent</span>
                      <Icon name="Send" size={16} className="text-success-600" />
                    </div>
                    <div className="text-2xl font-bold text-success-700">12,847</div>
                    <div className="text-xs text-success-600">+23% this week</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-600 font-medium">Read Rate</span>
                      <Icon name="Eye" size={16} className="text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-primary-700">98%</div>
                    <div className="text-xs text-primary-600">vs 2% email</div>
                  </div>
                </div>

                {/* Sample Messages */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Store" size={16} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1 bg-primary-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-text-primary mb-1">New Product Launch 🚀</div>
                      <div className="text-xs text-text-secondary">Hi Sarah! Our new collection is here. Get 20% off with code NEW20</div>
                      <div className="text-xs text-success-600 mt-1">✓ Delivered • Read</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Calendar" size={16} className="text-secondary-foreground" />
                    </div>
                    <div className="flex-1 bg-secondary-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-text-primary mb-1">Appointment Reminder</div>
                      <div className="text-xs text-text-secondary">Your appointment is tomorrow at 2 PM. Reply CONFIRM to confirm.</div>
                      <div className="text-xs text-success-600 mt-1">✓ Delivered • Read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm font-semibold shadow-lg animate-bounce-subtle">
              98% Read Rate
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground rounded-full px-3 py-1 text-sm font-semibold shadow-lg">
              10x Engagement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;