import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const MESSAGE_TYPES = [
  { label: 'Marketing', value: 'marketing', cost: 0.9850 },
  { label: 'Authentication', value: 'authentication', cost: 0.35 },
  { label: 'Utility', value: 'utility', cost: 0.25 },
];

const VolumeCalculator = ({ isAnnual }) => {
  const [volume, setVolume] = useState(5000);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [messageType, setMessageType] = useState('marketing');

  const selectedType = MESSAGE_TYPES.find((t) => t.value === messageType);
  const perMessageCost = selectedType.cost;
  const calculateCost = (messageCount) => {
    return messageCount * perMessageCost;
  };

  const getRecommendedPlan = (messageCount) => {
    if (messageCount <= 5000) return 'Starter';
    if (messageCount <= 25000) return 'Professional';
    return 'Enterprise';
  };

  const monthlyCost = calculateCost(volume);
  const recommendedPlan = getRecommendedPlan(volume);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-background to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center tracking-tight drop-shadow-sm">
          <span className="inline-flex items-center gap-2"><Icon name="Calculator" size={30} className="text-primary" /> Volume Quotation</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:justify-center md:items-stretch">
          {/* Calculator Input Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col justify-between min-w-[320px] max-w-md mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-3">
                <Icon name="BarChart2" size={26} className="text-primary" />
                <h3 className="text-xl font-bold text-primary tracking-wide">Monthly Message Volume</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Expected messages per month
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={volume}
                      onChange={(e) => setVolume(parseInt(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-text-secondary mt-1">
                      <span>1K</span>
                      <span>25K</span>
                      <span>50K</span>
                      <span>100K+</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Message Type
                  </label>
                  <select
                    value={messageType}
                    onChange={e => setMessageType(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-surface text-text-primary"
                  >
                    {MESSAGE_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Selected Volume:</span>
                    <span className="text-2xl font-bold text-primary">
                      {volume.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-text-secondary">Per-message cost:</span>
                    <span className="text-lg font-semibold text-primary">₹{perMessageCost.toFixed(4)}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  iconName={showBreakdown ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                >
                  {showBreakdown ? 'Hide' : 'Show'} Cost Breakdown
                </Button>
              </div>
            </div>
          </div>
          {/* Cost Breakdown Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col justify-between min-w-[320px] max-w-md mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-3">
                <Icon name="TrendingUp" size={26} className="text-primary" />
                <h3 className="text-xl font-bold text-primary tracking-wide">Cost Breakdown</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-secondary">Monthly Cost:</span>
                    <span className="text-3xl font-bold text-primary">
                      ₹{monthlyCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-sm text-text-secondary">
                    ₹{perMessageCost.toFixed(4)} per message ({selectedType.label})
                  </div>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-secondary">Recommended Plan:</span>
                    <span className="font-semibold text-primary">
                      {recommendedPlan}
                    </span>
                  </div>
                  <div className="text-sm text-text-secondary">
                    Best fit for your volume
                  </div>
                </div>
                {showBreakdown && (
                  <div className="bg-background border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">
                      Pricing:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>All messages ({selectedType.label})</span>
                        <span>₹{perMessageCost.toFixed(4)} each</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total messages</span>
                        <span>{volume.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total cost</span>
                        <span>₹{monthlyCost.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="pt-4">
                  <Button
                    variant="primary"
                    fullWidth
                    iconName="Calculator"
                    iconPosition="left"
                    className="shadow-cta"
                  >
                    Get Started with {recommendedPlan}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolumeCalculator;