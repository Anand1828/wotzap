import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ openBookDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/home-page' },
    { label: 'Features', path: '/features-page' },
    // { label: 'Chatbot Features', path: '/chatbot-features' },
    { label: 'Pricing', path: '/pricing-page' },
    { label: 'Contact', path: '/contact' },
    // { label: 'Privacy Policy', path: '/privacy-policy' },
    // { label: 'Terms & Conditions', path: '/terms-conditions' },
    // { label: 'Refund & Cancellation Policy', path: '/refund-cancellation-policy' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item.anchor) {
      const element = document.querySelector(item.anchor);
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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`sticky top-0 z-100 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-background'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/home-page" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Icon name="MessageCircle" size={24} color="#FFFFFF" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-text-primary">Wotzap</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === item.path
                        ? 'text-primary font-semibold' : 'text-text-secondary'
                      }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-medium transition-colors duration-200 hover:text-primary text-text-secondary"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="primary"
                onClick={openBookDemoModal}
                iconName="ArrowRight"
                iconPosition="right"
                className="shadow-cta"
              >
                Demo Free
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-100">
            <div
              className="h-full bg-primary transition-all duration-100 ease-out"
              style={{
                width: `${Math.min(100, (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
              }}
            />
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-background shadow-xl transform transition-transform duration-300 z-50 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-lg font-semibold text-text-primary">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navigationItems.map((item) => (
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-lg text-left transition-colors ${location.pathname === item.path
                    ? 'bg-primary-50 text-primary font-semibold' : 'text-text-secondary hover:bg-surface hover:text-primary'
                  }`}
              >
                <span>{item.label}</span>
                <Icon name="ChevronRight" size={16} />
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="flex items-center justify-between p-3 rounded-lg text-left transition-colors text-text-secondary hover:bg-surface hover:text-primary"
              >
                <span>{item.label}</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            )
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-surface">
          <div className="space-y-3">
            <Button
              variant="primary"
              fullWidth
              onClick={openBookDemoModal}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Demo Free
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;