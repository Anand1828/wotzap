import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Modal from './Modal';
import BookDemoForm from './BookDemoForm';


const FloatingActionMenu = ({ openBookDemoModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const actionItems = [
    {
      id: 'trial',
      label: 'Start Free Trial',
      icon: 'Zap',
      anchor: '#pricing',
      variant: 'primary',
      description: 'No credit card required'
    },
    {
      id: 'pricing',
      label: 'See Pricing',
      icon: 'DollarSign',
      anchor: '#pricing',
      variant: 'outline',
      description: 'Compare all plans'
    },
    {
      id: 'book-demo',
      label: 'Book Demo',
      icon: 'Calendar',
      anchor: null,
      variant: 'secondary',
      description: 'Schedule a live demo',
      onClick: openBookDemoModal
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom + window.pageYOffset;
        setIsVisible(scrollPosition > heroBottom - 200);
      }

      // Update active section for context-aware CTA
      const sections = ['features', 'pricing', 'testimonials', 'demo'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleActionClick = (anchor, onClick) => {
    if (onClick) {
      onClick();
      setIsExpanded(false);
      return;
    }
    if (anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsExpanded(false);
  };

  const getContextualCTA = () => {
    switch (activeSection) {
      case 'features':
        return { text: 'Demo Free', icon: 'Zap' };
      case 'testimonials':
        return { text: 'Get Your Demo', icon: 'Calendar' };
      case 'demo':
        return { text: 'Demo Free', icon: 'Zap' };
      default:
        return { text: 'Demo Free', icon: 'Zap' };
    }
  };

  const contextualCTA = getContextualCTA();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 -z-10"
            onClick={() => setIsExpanded(false)}
          />
          
          {/* Action Items */}
          <div className="absolute bottom-16 right-0 space-y-3 mb-4">
            {actionItems.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-background rounded-lg shadow-lg px-3 py-2 border border-border">
                  <div className="text-sm font-medium text-text-primary">{item.label}</div>
                  <div className="text-xs text-text-secondary">{item.description}</div>
                </div>
                <button
                  onClick={() => handleActionClick(item.anchor, item.onClick)}
                  className={`w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center ${
                    item.variant === 'primary' ?'bg-primary text-primary-foreground hover:bg-primary-600' 
                      : item.variant === 'secondary' ?'bg-secondary text-secondary-foreground hover:bg-secondary-700' :'bg-background text-text-primary border-2 border-border hover:border-primary'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Main FAB */}
      <div className="relative">
        {/* Context Indicator */}
        {!isExpanded && activeSection && (
          <div className="absolute -top-12 right-0 bg-background rounded-lg shadow-lg px-3 py-2 border border-border animate-fade-in">
            <div className="text-xs font-medium text-text-primary">{contextualCTA.text}</div>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border transform translate-y-full"></div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${
            isExpanded 
              ? 'bg-text-secondary text-background rotate-45 scale-110' :'bg-primary text-primary-foreground hover:bg-primary-600 hover:scale-110 animate-bounce-subtle'
          }`}
          aria-label={isExpanded ? 'Close menu' : 'Open quick actions'}
        >
          <Icon 
            name={isExpanded ? 'X' : contextualCTA.icon} 
            size={24} 
            className="transition-transform duration-200"
          />
        </button>

        {/* Notification Badge */}
        {!isExpanded && activeSection === 'testimonials' && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-accent-foreground">!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingActionMenu;