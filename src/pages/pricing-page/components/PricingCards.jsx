import React from 'react';
import Icon from '../../../components/AppIcon';

const getMessageCharges = (isAnnual) => ([
  {
    icon: 'BarChart3',
    title: 'Low Volume',
    subtitle: 'Fewer than 5,000 messages/month',
    price: isAnnual ? '₹799' : '₹999',
    description: 'Platform Fee charges',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    perMessage: [
      { label: 'Marketing', value: isAnnual ? 0.80 : 0.9850 },
      { label: 'Authentication', value: isAnnual ? 0.30 : 0.35 },
      { label: 'Utility', value: isAnnual ? 0.20 : 0.25 },
    ],
  },
  {
    icon: 'TrendingUp',
    title: 'Medium Volume',
    subtitle: '5,000 to 10,000 messages/month',
    price: isAnnual ? '₹399' : '₹499',
    description: 'Platform Fee charges',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    perMessage: [
      { label: 'Marketing', value: isAnnual ? 0.80 : 0.9850 },
      { label: 'Authentication', value: isAnnual ? 0.30 : 0.35 },
      { label: 'Utility', value: isAnnual ? 0.20 : 0.25 },
    ],
  },
  {
    icon: 'Zap',
    title: 'High Volume',
    subtitle: 'More than 10,000 messages/month',
    price: '₹0',
    description: 'Only per-message charges apply',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    perMessage: [
      { label: 'Marketing', value: isAnnual ? 0.80 : 0.9850 },
      { label: 'Authentication', value: isAnnual ? 0.30 : 0.35 },
      { label: 'Utility', value: isAnnual ? 0.20 : 0.25 },
    ],
  },
]);

const PricingCards = ({ isAnnual, setIsAnnual }) => {
  const messageCharges = getMessageCharges(isAnnual);
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-background to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight drop-shadow-sm">
            Message Volume Pricing
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the right pricing tier based on your monthly message volume. Higher volumes mean lower platform fees.
          </p>

             {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 m-4">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-text-primary' : 'text-text-secondary'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-border'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-text-primary' : 'text-text-secondary'}`}>Annual</span>
          {isAnnual && (
            <span className="inline-flex items-center bg-success-100 text-success-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <Icon name="Tag" size={12} className="mr-1" />
              Save 20%
            </span>
          )}
        </div>
        {/* End Billing Toggle */}

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
            <Icon name="Clock" size={16} className="text-primary" />
            {isAnnual ? 'Annual Billing (Save more!)' : 'Monthly Billing'}
          </div>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {messageCharges.map((charge, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border-2 ${charge.borderColor} p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${charge.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={charge.icon} size={28} className={charge.color} />
                </div>
                <h3 className={`text-xl font-bold ${charge.color} mb-2`}>
                  {charge.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {charge.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-text-primary mb-1">
                  {charge.price}{charge.price !== '₹0' && <span className="text-base font-normal text-text-secondary">/month</span>}
                </div>
                <div className="text-sm text-text-secondary">
                  {charge.description}
                </div>
              </div>

              {/* Per-message charges */}
              <div className="mb-6">
                <div className="font-semibold text-text-primary mb-2 text-center">Per-message Charges</div>
                <ul className="space-y-1">
                  {charge.perMessage.map((msg, i) => (
                    <li key={i} className="flex items-center justify-between text-sm bg-surface rounded px-3 py-2 mb-1">
                      <span className="flex items-center gap-2">
                        {msg.label === 'Marketing' && <Icon name="Send" size={16} className="text-primary" />}
                        {msg.label === 'Authentication' && <Icon name="Shield" size={16} className="text-blue-500" />}
                        {msg.label === 'Utility' && <Icon name="MessageCircle" size={16} className="text-green-600" />}
                        {msg.label}
                      </span>
                      <span className="font-mono font-semibold">₹{msg.value.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {index === 0 && (
                  <>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      <span>Platform fee applies</span>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      <span>Reduced platform fee</span>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      <span>No platform fee</span>
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      <span>Only per-message charges</span>
                    </div>
                  </>
                )}
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  index === 1 
                    ? 'bg-primary text-white hover:bg-primary-600' 
                    : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                }`}>
                  {index === 1 ? 'Most Popular' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* International warning/info */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="flex items-center bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-4">
            <Icon name="Info" size={20} className="mr-2 text-blue-500" />
            <span>
              Working in other countries: <b>International message charges may apply.</b> Please contact support for details on international pricing.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;