import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
            <span className="text-green-600 block">With Our Team</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Have questions about WhatsApp Marketing Pro? Want to schedule a demo? 
            Our team is here to help you succeed with your marketing goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={20} color="#16a34a" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">Available 24/7 for instant help</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={20} color="#2563eb" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM PST</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={20} color="#7c3aed" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">Response within 4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;