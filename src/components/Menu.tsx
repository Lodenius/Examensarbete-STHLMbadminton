import '../styles/Menu.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="menu">
      <section className="menu__toggleButton" onClick={toggleMenu}>
        <motion.div
            initial={{ rotate: 0, y: 0, x: 0 }}
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? "10px" : "0px", x: isOpen ? "-4px" : "0px"}}
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <motion.div
            initial={{ rotate: 0, y: 0, x: 0 }}
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? "-11px" : "0px", x: isOpen ? "-3px" : "0px" }}
            transition={{ duration: 0.3 }}
        ></motion.div>
      </section>
      <AnimatePresence>
        {isOpen && (
          <motion.article>
            <motion.ul>
              <NavLink to='/'>
                <motion.li
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  >
                   Start 
                </motion.li>
              </NavLink>
              <NavLink to='/about'>
                <motion.li
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  >
                  Om oss 
                </motion.li>
              </NavLink>

              <NavLink to='/prices'>
                <motion.li
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  >
                  Priser 
                </motion.li>
              </NavLink>              
              <NavLink to='/booking'>
                <motion.li
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  >
                  Boka 
                </motion.li>
              </NavLink>
              <NavLink to='/events'>
                <motion.li
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  >
                  Event 
                </motion.li>
              </NavLink>
            </motion.ul>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;