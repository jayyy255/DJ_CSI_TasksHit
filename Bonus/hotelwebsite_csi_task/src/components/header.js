import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './sidebar';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <header className="header">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            className="header-title"
            variants={itemVariants}
            onClick={() => navigate('/')}
          >
            <h1>LOREM IPSUM</h1>
          </motion.div>
          <motion.div className="header-buttons">
            {!isMobile && (
              <>
                <motion.button
                  variants={itemVariants}
                  onClick={() => navigate('/booking')}
                >
                  Booking Facilities
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  onClick={() => navigate('/about')}
                >
                  About Us
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  onClick={() => navigate('/location')}
                >
                  Location
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  onClick={() => navigate('/contact')}
                >
                  Contact
                </motion.button>
              </>
            )}
          </motion.div>
          {!isMobile && (
            <motion.div className="header-login">
              <motion.button
                className="login-button"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#218838',
                  color: 'black',
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                onClick={() => navigate('/login')}
              >
                Login
              </motion.button>
            </motion.div>
          )}
          {isMobile && (
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              ☰
            </button>
          )}
        </motion.section>
      </header>
     
      {isMobile && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
    </>
  );
};

export default Header;
