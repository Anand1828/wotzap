import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FinalCTASection = ({ openBookDemoModal }) => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [joinedThisMonth, setJoinedThisMonth] = useState(523);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate real-time counter
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setJoinedThisMonth(prev => prev + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setCurrentStep(2);
    }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setCurrentStep(3);
  };

  const benefits = [
    {
      icon: 'Zap',
      title: '98% Message Read Rate',
      description: 'vs 2-5% email open rates'
    },
    {
      icon: 'TrendingUp',
      title: '10x Higher Engagement',
      description: 'Compared to traditional marketing'
    },
    {
      icon: 'Clock',
      title: '15-Minute Setup',
      description: 'Start sending campaigns today'
    },
    {
      icon: 'Shield',
      title: 'Fully Compliant',
      description: 'WhatsApp Business API certified'
    }
  ];

  const urgencyFeatures = [
    'WhatsApp Business API setup',
    'Pre-built campaign templates library',
    'Priority onboarding support',
    'Exclusive access to new features',
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Banner
        <div className="bg-accent text-accent-foreground rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <Icon name="Clock" size={24} />
            <span className="text-lg font-bold">Limited Time Setup Bonus Expires In:</span>
          </div>
          <div className="flex items-center justify-center space-x-6 text-2xl font-bold">
            <div className="text-center">
              <div className="bg-white text-accent rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm mt-1">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-white text-accent rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm mt-1">Minutes</div>
            </div>
            <div className="text-center">
              <div className="bg-white text-accent rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm mt-1">Seconds</div>
            </div>
          </div>
        </div> */}

        <div className="grid gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-success mb-4">
                <Icon name="Users" size={20} />
                <span className="font-semibold">{joinedThisMonth} businesses joined this month</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                Ready to{' '}
                <span className="text-gradient">10x Your Customer Engagement</span>
                ?
              </h2>

              <p className="text-xl text-text-secondary mb-8">
                Join thousands of businesses already using WhatsApp Marketing Pro to increase sales,
                improve customer relationships, and automate their marketing.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary text-sm">{benefit.title}</div>
                    <div className="text-xs text-text-secondary">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Setup Bonus Features */}
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gift" size={20} className="text-accent" />
                <span className="font-bold text-text-primary">Limited Time Setup Bonus Includes:</span>
              </div>
              <ul className="space-y-2">
                {urgencyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Form
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-border">
            {currentStep === 1 && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Start Your Free 14-Day Trial
                  </h3>
                  <p className="text-text-secondary">
                    No credit card required • Setup in 15 minutes • Cancel anytime
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Business Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="shadow-cta"
                    onClick={openBookDemoModal}
                  >
                    Continue to Setup
                  </Button>

                  <div className="text-center text-xs text-text-secondary">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </div>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Tell Us About Your Business
                  </h3>
                  <p className="text-text-secondary">
                    We'll customize your setup for the best results
                  </p>
                </div>

                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter your company name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      WhatsApp Business Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="w-full"
                    />
                    <div className="text-xs text-text-secondary mt-1">
                      We'll help you set up WhatsApp Business API on this number
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    iconName="Zap"
                    iconPosition="left"
                    className="shadow-cta"
                  >
                    {isSubmitting ? 'Setting Up Your Account...' : 'Demo Free'}
                  </Button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-full text-center text-text-secondary hover:text-primary transition-colors"
                  >
                    ← Back to email
                  </button>
                </form>
              </div>
            )}

            {currentStep === 3 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={40} className="text-success" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Welcome to Wotzap!
                </h3>
                <p className="text-text-secondary mb-6">
                  Your account is being set up. You'll receive login details and setup instructions 
                  at <strong>{email}</strong> within the next 5 minutes.
                </p>
                
                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">What happens next?</span>
                  </div>
                  <ul className="text-left text-sm text-text-secondary space-y-1">
                    <li>• Account setup email (within 5 minutes)</li>
                    <li>• WhatsApp Business API configuration</li>
                    <li>• Personal onboarding call scheduled</li>
                    <li>• First campaign ready to send</li>
                  </ul>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  Access Your Dashboard
                </Button>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-xs text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={12} />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Lock" size={12} />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Check" size={12} />
                  <span>WhatsApp Certified</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;