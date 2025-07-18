import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStorySection = () => {
  const milestones = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Founded with a vision to bridge the gap between businesses and customers through WhatsApp communication.',
      icon: 'Lightbulb'
    },
    {
      year: '2020',
      title: 'First 1000 Customers',
      description: 'Reached our first major milestone during the pandemic when businesses needed digital communication more than ever.',
      icon: 'Users'
    },
    {
      year: '2021',
      title: 'WhatsApp Business Partner',
      description: 'Became an official WhatsApp Business Solution Provider, ensuring compliance and premium features.',
      icon: 'Award'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to serve customers in over 50 countries, processing millions of messages daily.',
      icon: 'Globe'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Launched AI-powered features including smart segmentation and automated response optimization.',
      icon: 'Brain'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as the leading WhatsApp marketing platform with 10,000+ active customers worldwide.',
      icon: 'Trophy'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a global leader in WhatsApp marketing, 
            here's how we've grown alongside our customers.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:pr-8">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-lg shadow-card p-6 border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon name={milestone.icon} size={20} color="#16a34a" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                          <p className="text-green-600 font-semibold">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-sm hidden md:block"></div>
                
                <div className="flex-1 md:pl-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;