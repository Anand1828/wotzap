import React from 'react';
import Icon from '../../../components/AppIcon';

const CustomerStories = () => {
  const stories = [
    {
      id: 1,
      plan: 'Starter',
      company: 'Local Bakery',
      industry: 'Food & Beverage',
      size: 'Small Business',
      avatar: '/api/placeholder/60/60',
      name: 'Sarah Johnson',
      title: 'Owner',
      quote: "WhatsApp Marketing Pro helped us increase our daily orders by 40% in just 2 months. The simple interface made it easy for our small team to manage customer communications.",
      results: {
        metric1: { label: 'Order Increase', value: '40%' },
        metric2: { label: 'Customer Retention', value: '85%' },
        metric3: { label: 'Revenue Growth', value: '₹2.5K/month' }
      },
      challenge: 'Reaching customers during peak hours and managing order confirmations',
      solution: 'Automated order confirmations and promotional messages for daily specials'
    },
    {
      id: 2,
      plan: 'Professional',
      company: 'TechStart Solutions',
      industry: 'Technology',
      size: 'Growing Business',
      avatar: '/api/placeholder/60/60',
      name: 'Michael Chen',
      title: 'Marketing Director',
      quote: "The automation features saved us 20 hours per week on customer follow-ups. Our conversion rate improved by 312% after implementing WhatsApp in our sales funnel.",
      results: {
        metric1: { label: 'Conversion Rate', value: '312%' },
        metric2: { label: 'Time Saved', value: '20 hrs/week' },
        metric3: { label: 'Revenue Impact', value: '₹15K/month' }
      },
      challenge: 'Low email open rates and lengthy sales cycles',
      solution: 'Automated nurture sequences and personalized follow-up campaigns'
    },
    {
      id: 3,
      plan: 'Enterprise',
      company: 'Global Retail Corp',
      industry: 'E-commerce',
      size: 'Enterprise',
      avatar: '/api/placeholder/60/60',
      name: 'Jessica Rodriguez',
      title: 'VP of Customer Experience',
      quote: "With 500K+ customers, we needed a scalable solution. WhatsApp Marketing Pro handles our volume effortlessly while maintaining 98% delivery rates and exceptional customer satisfaction.",
      results: {
        metric1: { label: 'Customer Satisfaction', value: '98%' },
        metric2: { label: 'Delivery Rate', value: '99.9%' },
        metric3: { label: 'Cost Reduction', value: '45%' }
      },
      challenge: 'Managing high-volume customer communications across multiple channels',
      solution: 'Enterprise-grade automation with custom integrations and dedicated support'
    }
  ];

  const getPlanColor = (plan) => {
    switch (plan) {
      case 'Starter':
        return 'bg-blue-100 text-blue-800';
      case 'Professional':
        return 'bg-primary-100 text-primary-800';
      case 'Enterprise':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See how businesses across different industries achieve remarkable results with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPlanColor(story.plan)}`}>
                    {story.plan} Plan
                  </span>
                  <div className="text-sm text-text-secondary">
                    {story.industry}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="Building" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {story.company}
                    </h3>
                    <div className="text-sm text-text-secondary">
                      {story.size}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">
                      {story.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {story.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <Icon name="Quote" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-text-secondary italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              <div className="p-6 bg-surface border-t border-border">
                <h4 className="font-semibold text-text-primary mb-4">
                  Key Results:
                </h4>
                <div className="space-y-3">
                  {Object.entries(story.results).map(([key, result]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        {result.label}:
                      </span>
                      <span className="font-bold text-success">
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-border">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-text-primary mb-2 flex items-center">
                      <Icon name="AlertCircle" size={16} className="text-warning mr-2" />
                      Challenge
                    </h5>
                    <p className="text-sm text-text-secondary">
                      {story.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-text-primary mb-2 flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      Solution
                    </h5>
                    <p className="text-sm text-text-secondary">
                      {story.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Overall Statistics */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Trusted by 10,000+ Businesses Worldwide
              </h3>
              <p className="text-primary-100">
                Join successful businesses already using WhatsApp Marketing Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">98.2%</div>
                <div className="text-primary-100 text-sm">Average Read Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5.2x</div>
                <div className="text-primary-100 text-sm">Revenue Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24.7%</div>
                <div className="text-primary-100 text-sm">Click-through Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">92%</div>
                <div className="text-primary-100 text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;