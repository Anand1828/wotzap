import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AboutHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing Business
            <span className="text-green-600 block">Communication</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            We're on a mission to help businesses of all sizes harness the power of WhatsApp 
            to build meaningful relationships with their customers and drive unprecedented growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="primary" 
              size="lg"
              iconName="Users"
              iconPosition="left"
            >
              Meet Our Team
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Our Story
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} color="#16a34a" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2019</h3>
              <p className="text-gray-600">Founded</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="#2563eb" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} color="#7c3aed" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;