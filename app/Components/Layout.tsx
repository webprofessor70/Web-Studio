"use client"
import React, { ReactNode, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, useInView, useAnimation } from 'framer-motion';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const ref = useRef(null); // Create a ref for the main section
  const isInView = useInView(ref, { once: true }); // Check if the section is in view

  const mainControls = useAnimation(); // Animation controls
  const slideControls = useAnimation(); // Animation controls
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
       // Start the animation when in view
       slideControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main
        ref={ref} // Attach the ref to the main element
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" // Set initial state
        animate={mainControls} // Use animation controls
        transition={{ duration: 0.5, delay: 0.25 }} // Set transition properties
        className="flex-grow container mx-auto py-6"
      >
        {children}
      </motion.main>
       <motion.div 
       variants={{ 
        hidden: { left: '0' },
        visible: { left: '100%' },
        
       }}
       initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{ position: 'absolute', top: 4, bottom: 4, left: 0, right: 0, width: '100%', height: '100%', backgroundColor: 'rgba(9, 100, 9, 0.5)', zIndex: 20 }}
       >

       </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
