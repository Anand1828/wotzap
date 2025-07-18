import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ROICalculator = ({ openBookDemoModal }) => {
  const [inputs, setInputs] = useState({
    currentMarketing: 1000,
    emailReadRate: 20,
    whatsappReadRate: 98,
    currentConversion: 2.5,
    expectedImprovement: 300,
    averageOrderValue: 50,
    monthlyOrders: 200
  });

  const [showDetails, setShowDetails] = useState(false);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateROI = () => {
    const currentRevenue = inputs.monthlyOrders * inputs.averageOrderValue;
    const improvedConversion = inputs.currentConversion * (inputs.expectedImprovement / 100);
    const newOrders = inputs.monthlyOrders * (1 + improvedConversion / 100);
    const newRevenue = newOrders * inputs.averageOrderValue;
    const revenueIncrease = newRevenue - currentRevenue;
    const whatsappCost = 79; // Professional plan
    const netGain = revenueIncrease - whatsappCost;
    const roi = (netGain / whatsappCost) * 100;

    return {
      currentRevenue,
      newRevenue,
      revenueIncrease,
      whatsappCost,
      netGain,
      roi,
      newOrders,
      improvedConversion
    };
  };

  const results = calculateROI();

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            ROI Calculator
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See how WhatsApp marketing can transform your business performance
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="Calculator" size={24} className="mr-2 text-primary" />
                Your Current Metrics
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Current Monthly Marketing Spend (₹)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentMarketing}
                    onChange={(e) => handleInputChange('currentMarketing', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Current Email Read Rate (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.emailReadRate}
                    onChange={(e) => handleInputChange('emailReadRate', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Current Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.currentConversion}
                    onChange={(e) => handleInputChange('currentConversion', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="2.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Average Order Value (₹)
                  </label>
                  <input
                    type="number"
                    value={inputs.averageOrderValue}
                    onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Monthly Orders
                  </label>
                  <input
                    type="number"
                    value={inputs.monthlyOrders}
                    onChange={(e) => handleInputChange('monthlyOrders', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Expected Improvement with WhatsApp (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.expectedImprovement}
                    onChange={(e) => handleInputChange('expectedImprovement', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="300"
                  />
                  <div className="text-xs text-text-secondary mt-1">
                    Based on 98% read rate vs {inputs.emailReadRate}% email read rate
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="TrendingUp" size={24} className="mr-2 text-success" />
                Projected Results
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary to-primary-600 rounded-lg p-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {results.roi.toFixed(0)}%
                    </div>
                    <div className="text-primary-100">
                      Return on Investment
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface rounded-lg p-4">
                    <div className="text-2xl font-bold text-text-primary">
                      ₹{results.currentRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Current Monthly Revenue
                    </div>
                  </div>
                  
                  <div className="bg-success-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-success">
                      ₹{results.newRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-success-600">
                      Projected Revenue
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-primary">
                        ₹{results.revenueIncrease.toLocaleString()}
                      </div>
                      <div className="text-sm text-text-secondary">
                        Monthly Revenue Increase
                      </div>
                    </div>
                    <Icon name="ArrowUp" size={24} className="text-success" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">WhatsApp Pro Cost:</span>
                    <span className="font-semibold">-₹{results.whatsappCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Revenue Increase:</span>
                    <span className="font-semibold text-success">+₹{results.revenueIncrease.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-text-primary font-semibold">Net Monthly Gain:</span>
                      <span className="text-xl font-bold text-success">
                        ₹{results.netGain.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => setShowDetails(!showDetails)}
                  iconName={showDetails ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                >
                  {showDetails ? 'Hide' : 'Show'} Detailed Breakdown
                </Button>

                {showDetails && (
                  <div className="bg-background border border-border rounded-lg p-4 text-sm">
                    <h4 className="font-semibold mb-3">Calculation Details:</h4>
                    <div className="space-y-2">
                      <div>• Current orders: {inputs.monthlyOrders}/month</div>
                      <div>• Projected orders: {Math.round(results.newOrders)}/month</div>
                      <div>• Conversion improvement: {results.improvedConversion.toFixed(1)}%</div>
                      <div>• WhatsApp read rate: {inputs.whatsappReadRate}% vs Email: {inputs.emailReadRate}%</div>
                      <div>• Annual net gain: ₹{(results.netGain * 12).toLocaleString()}</div>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <Button
                    variant="primary"
                    fullWidth
                    iconName="Rocket"
                    iconPosition="left"
                    className="shadow-cta"
                    onClick={openBookDemoModal}
                  >
                    Start Demo Free
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

export default ROICalculator;