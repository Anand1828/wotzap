import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingHero = ({ isAnnual, openBookDemoModal }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="DollarSign" size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Simple, Transparent
            <span className="block text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our core features 
            with no hidden fees or setup costs. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="primary" 
              size="lg"
              iconName="Zap"
              iconPosition="left"
              className="shadow-cta"
              onClick={openBookDemoModal}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;