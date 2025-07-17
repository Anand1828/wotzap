import React from 'react';
import Icon from '../components/AppIcon';

const services = [
  {
    icon: 'Send',
    title: 'WhatsApp Campaigns',
    description: 'Launch targeted WhatsApp marketing campaigns to boost engagement and conversions.'
  },
  {
    icon: 'Bot',
    title: 'Chatbot Automation',
    description: 'Automate customer interactions and support with intelligent WhatsApp chatbots.'
  },
  {
    icon: 'Key',
    title: 'API Integration',
    description: 'Seamlessly integrate WhatsApp with your CRM, website, or business tools.'
  },
  {
    icon: 'BarChart2',
    title: 'Analytics & Reporting',
    description: 'Track campaign performance and customer engagement with real-time analytics.'
  },
  {
    icon: 'Headphones',
    title: 'Customer Support',
    description: 'Provide instant, multi-agent support to your customers on WhatsApp.'
  },
  {
    icon: 'Users',
    title: 'Bulk Messaging',
    description: 'Send personalized messages to thousands of contacts with a single click.'
  }
];

const Services = () => (
  <section className="py-16 bg-gradient-to-b from-background to-gray-50 min-h-screen">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Unlock the full power of WhatsApp for your business with our comprehensive suite of services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-50 mb-4">
              <Icon name={service.icon} size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">{service.title}</h3>
            <p className="text-text-secondary text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 