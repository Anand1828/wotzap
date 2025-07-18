import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const SectionNavigator = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'features', label: 'Features', icon: 'Zap' },
    { id: 'pricing', label: 'Pricing', icon: 'DollarSign' },
    { id: 'testimonials', label: 'Success Stories', icon: 'Star' },
    { id: 'demo', label: 'Demo', icon: 'Play' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      // Show navigator after hero section
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom + window.pageYOffset;
        setIsVisible(scrollPosition > heroBottom - 200);
      }

      // Find active section
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden xl:block">
      <div className="bg-background/95 backdrop-blur-sm rounded-full shadow-lg border border-border p-2">
        <nav className="flex flex-col space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`group relative w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground shadow-md scale-110'
                  : 'text-text-secondary hover:text-primary hover:bg-surface hover:scale-105'
              }`}
              aria-label={`Navigate to ${section.label}`}
            >
              <Icon name={section.icon} size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-text-primary text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {section.label}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-text-primary"></div>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SectionNavigator;