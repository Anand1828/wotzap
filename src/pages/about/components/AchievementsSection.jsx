import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Messages Delivered',
      value: '1.2B+',
      description: 'Successfully delivered messages with 99.9% delivery rate',
      icon: 'MessageSquare',
      color: 'green'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.9/5',
      description: 'Average rating from 2,000+ customer reviews',
      icon: 'Star',
      color: 'yellow'
    },
    {
      title: 'Average ROI',
      value: '420%',
      description: 'Average return on investment for our customers',
      icon: 'TrendingUp',
      color: 'blue'
    },
    {
      title: 'Global Presence',
      value: '50+',
      description: 'Countries where our platform is actively used',
      icon: 'Globe',
      color: 'purple'
    },
    {
      title: 'Industry Awards',
      value: '15+',
      description: 'Recognition from leading industry organizations',
      icon: 'Award',
      color: 'orange'
    },
    {
      title: 'Uptime Guarantee',
      value: '99.9%',
      description: 'Reliable service with minimal downtime',
      icon: 'Activity',
      color: 'red'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and the trust our customers place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-card p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(achievement.color)}`}>
                <Icon name={achievement.icon} size={24} />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.value}
              </h3>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {achievement.title}
              </h4>
              
              <p className="text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Certifications & Partnerships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <Icon name="CheckCircle" size={24} color="#16a34a" className="mr-3" />
                <span className="font-semibold text-gray-900">WhatsApp Business Partner</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <Icon name="Shield" size={24} color="#2563eb" className="mr-3" />
                <span className="font-semibold text-gray-900">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <Icon name="Lock" size={24} color="#7c3aed" className="mr-3" />
                <span className="font-semibold text-gray-900">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;