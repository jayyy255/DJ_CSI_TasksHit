import React from 'react';
import { motion } from 'framer-motion';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

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
        </motion.div>
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
      </motion.section>
    </header>
  );
};

export default Header;
