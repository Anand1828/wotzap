import React, { useState, useEffect } from 'react';

const StickyProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      const footerSection = document.getElementById('footer');
      
      // Show progress bar after hero section
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom + window.pageYOffset;
        setIsVisible(scrollPosition > heroBottom - 100);
      }

      // Calculate progress excluding footer
      let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (footerSection) {
        const footerHeight = footerSection.offsetHeight;
        documentHeight -= footerHeight;
      }

      const progress = Math.min(100, Math.max(0, (scrollPosition / documentHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-surface-100 z-40">
      <div 
        className="h-full bg-gradient-to-r from-primary to-primary-600 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Progress Milestones */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[25, 50, 75].map((milestone) => (
          <div
            key={milestone}
            className={`absolute top-0 w-1 h-full transition-colors duration-200 ${
              scrollProgress >= milestone ? 'bg-primary-600' : 'bg-surface-200'
            }`}
            style={{ left: `${milestone}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default StickyProgressBar;