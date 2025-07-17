import React, { useState, useEffect } from 'react';
import Header from './ui/Header';
import Footer from '../pages/landing-page/components/Footer';
import FloatingActionMenu from './ui/FloatingActionMenu';
import Modal from './ui/Modal';
import BookDemoForm from './ui/BookDemoForm';

const Layout = ({ children, showFloatingMenu = true, getOpenBookDemoModal }) => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const openBookDemoModal = () => setIsBookDemoOpen(true);
  const closeBookDemoModal = () => setIsBookDemoOpen(false);

  // Expose the openBookDemoModal function to parent if requested
  useEffect(() => {
    if (getOpenBookDemoModal) {
      getOpenBookDemoModal(() => openBookDemoModal);
    }
  }, [getOpenBookDemoModal]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header openBookDemoModal={openBookDemoModal} />
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Menu - optional */}
      {showFloatingMenu && <FloatingActionMenu openBookDemoModal={openBookDemoModal} />}
      <Modal isOpen={isBookDemoOpen} onClose={closeBookDemoModal}>
        <BookDemoForm onSuccess={closeBookDemoModal} />
      </Modal>
    </div>
  );
};

export default Layout; 