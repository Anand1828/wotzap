import React from 'react';
import Icon from '../AppIcon';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  // Prevent click inside modal from closing
  const handleDrawerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-end bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-white via-gray-50 to-gray-100 h-full w-full max-w-xl shadow-2xl border-l-4 border-primary p-0 relative animate-slide-in-right overflow-y-auto rounded-l-2xl flex flex-col"
        style={{
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
        onClick={handleDrawerClick}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-10 py-8 border-b border-gray-100 bg-white rounded-tl-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary shadow-lg">
              <Icon name="Calendar" size={28} className="text-white" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">Book a Demo</h2>
              <div className="text-sm text-primary font-medium mt-1">Get a personalized walkthrough</div>
            </div>
          </div>
          <button
            className="text-gray-400 hover:text-primary text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 transition"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="flex-1 px-10 py-4 bg-white/90 rounded-bl-2xl overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

/* Add this to your global CSS (e.g., index.css or tailwind.css):
@keyframes slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slide-in-right {
  animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
}
*/ 