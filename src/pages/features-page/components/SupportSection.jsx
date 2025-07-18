import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupportSection = () => {
  const supportOptions = [
    {
      title: '24/7 Live Chat Support',
      description: 'Get instant help from our expert support team whenever you need it.',
      icon: 'MessageCircle',
      availability: 'Available 24/7',
      response: 'Average response: 2 minutes'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical specialists for complex issues.',
      icon: 'Phone',
      availability: 'Mon-Fri 9AM-6PM',
      response: 'Direct line to experts'
    },
    {
      title: 'Email Support',
      description: 'Send detailed questions and receive comprehensive solutions.',
      icon: 'Mail',
      availability: 'Always available',
      response: 'Response within 4 hours'
    },
    {
      title: 'Knowledge Base',
      description: 'Access comprehensive guides, tutorials, and troubleshooting articles.',
      icon: 'Book',
      availability: 'Always available',
      response: '500+ helpful articles'
    }
  ];


  return (
    <section className="py-10 lg:py-22 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Support & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need to succeed with comprehensive support options and educational resources.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={option.icon} size={20} color="#16a34a" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} color="#6b7280" />
                      <span className="text-sm text-gray-600">{option.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={16} color="#6b7280" />
                      <span className="text-sm text-gray-600">{option.response}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SupportSection;