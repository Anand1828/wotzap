import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('ecommerce');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const businessTypes = [
    { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' },
    { id: 'restaurant', label: 'Restaurant', icon: 'UtensilsCrossed' },
    { id: 'fitness', label: 'Fitness', icon: 'Dumbbell' },
    { id: 'realestate', label: 'Real Estate', icon: 'Home' }
  ];

  const messageSequences = {
    ecommerce: [
      {
        type: 'automated',
        message: `Hi Sarah! 👋\n\nYour cart has some amazing items waiting for you:\n• Wireless Headphones - ₹89\n• Phone Case - ₹24\n\nComplete your purchase now and get FREE shipping! 🚚`,
        time: '2:34 PM'
      },
      {
        type: 'customer',
        message: 'Is there a discount available?',
        time: '2:36 PM'
      },
      {
        type: 'automated',
        message: `Great question! 🎉\n\nI can offer you 15% off your entire order right now.\n\nUse code: SAVE15\n\nThis expires in 30 minutes. Ready to checkout?`,
        time: '2:36 PM'
      }
    ],
    restaurant: [
      {
        type: 'automated',
        message: `Hey Mike! 🍕\n\nYour usual Friday pizza night is coming up!\n\nWant me to prepare your regular order?\n• Large Pepperoni Pizza\n• Garlic Bread\n• 2L Coke\n\nReady in 25 minutes!`,
        time: '5:15 PM'
      },
      {
        type: 'customer',
        message: 'Yes please! Same address?',
        time: '5:16 PM'
      },
      {
        type: 'automated',
        message: `Perfect! ✅\n\nOrder confirmed for 123 Main St.\nTotal: ₹28.50\nEstimated delivery: 6:00 PM\n\nTracking link: bit.ly/order-123`,
        time: '5:16 PM'
      }
    ],
    fitness: [
      {
        type: 'automated',
        message: `Morning Emma! 💪\n\nYour workout streak is at 12 days - amazing!\n\nToday's personalized workout:\n• 30min HIIT Cardio\n• Upper Body Strength\n• 10min Cool Down\n\nReady to crush it?`, time: '7:00 AM'
      },
      {
        type: 'customer', message: 'Can I modify the cardio part?', time: '7:02 AM'
      },
      {
        type: 'automated', message: `Absolutely! 🎯\n\nBased on your preferences:\n• 20min Yoga Flow (instead of HIIT)\n• Upper Body Strength\n• 15min Meditation\n\nWorkout updated! See you at the gym 🏋️‍♀️`, time: '7:02 AM'
      }
    ],
    realestate: [
      {
        type: 'automated',
        message: `Hi David! 🏠\n\nGreat news! A new property matching your criteria just hit the market:\n\n�� Downtown Condo\n💰 ₹450,000\n🛏️ 2 bed, 2 bath\n📏 1,200 sq ft\n\nWant to schedule a viewing?`,
        time: '11:30 AM'
      },
      {
        type: 'customer', message: 'Looks interesting! When can we see it?', time: '11:45 AM'
      },
      {
        type: 'automated',
        message: `Excellent! 📅\n\nI have these slots available:\n• Today 3:00 PM\n• Tomorrow 10:00 AM\n• Tomorrow 2:00 PM\n\nWhich works best for you?\n\nAddress: 456 Oak Street`,
        time: '11:45 AM'
      }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('solution-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = messageSequences[selectedBusinessType];
      setCurrentMessageIndex(prev => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedBusinessType]);

  const currentMessages = messageSequences[selectedBusinessType];

  return (
    <section id="solution-section" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Solution Is
            <span className="text-green-600 block mt-2">WhatsApp Marketing Automation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how personalized WhatsApp messages can transform your business.
            Choose your industry and watch the magic happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Business Type Selector */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Business Type:</h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setSelectedBusinessType(type.id);
                    setCurrentMessageIndex(0);
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${selectedBusinessType === type.id
                      ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-green-300 text-gray-700'
                    }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Icon
                      name={type.icon}
                      size={32}
                      color={selectedBusinessType === type.id ? '#16a34a' : '#6b7280'}
                    />
                    <span className="font-semibold">{type.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={16} color="#16a34a" />
                </div>
                <span className="text-gray-700">Automated personalized messaging</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Target" size={16} color="#16a34a" />
                </div>
                <span className="text-gray-700">Smart customer segmentation</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="BarChart" size={16} color="#16a34a" />
                </div>
                <span className="text-gray-700">Real-time analytics & insights</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={16} color="#16a34a" />
                </div>
                <span className="text-gray-700">WhatsApp Business API compliant</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Conversation Simulator */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-100 rounded-2xl p-6 max-w-md mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-green-600 text-white p-4 rounded-t-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Icon name="Store" size={20} color="#16a34a" />
                </div>
                <div>
                  <h4 className="font-semibold">Your Business</h4>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white p-4 space-y-4 min-h-[400px] max-h-[400px] overflow-y-auto">
                {currentMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${index <= currentMessageIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                  >
                    <div className={`flex ${msg.type === 'customer' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-3 rounded-lg ${msg.type === 'customer' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'
                        }`}>
                        <p className="text-sm whitespace-pre-line">{msg.message}</p>
                        <p className={`text-xs mt-1 ${msg.type === 'customer' ? 'text-green-100' : 'text-gray-500'
                          }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="bg-gray-50 p-3 rounded-b-xl flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500">
                  Type a message...
                </div>
                <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Send" size={16} color="white" />
                </button>
              </div>
            </div>

            {/* Conversation Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-xs text-green-700">Open Rate</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">45%</div>
                <div className="text-xs text-blue-700">Response Rate</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-600">12x</div>
                <div className="text-xs text-purple-700">ROI Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            variant="primary"
            size="xl"
            iconName="ArrowRight"
            iconPosition="right"
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            See How It Works For Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;