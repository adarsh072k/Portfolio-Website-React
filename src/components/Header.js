import React, { useContext } from 'react';
import Logo from "../assets/ap.png";
import Sun from '../assets/sun.png';
import Moon from '../assets/moon.png';
import { ThemeContext } from '../context';
import { motion } from 'framer-motion';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleToggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  const headerClassName = `py-6 sticky top-0 shadow-md z-50 ${
    darkMode ? ' bg-slate-600' : 'bg-sky-50'
  }`;

  return (
    <header className={headerClassName}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center '>
          <a href="#">
            <img src={Logo} className='w-10' alt="" />
          </a>

          {/* Toggle Component */}
          <div className='w-[70px] h-[35px] flex items-center justify-around z-[999] border rounded-full border-gray-500 bg-white relative'>
            <img src={Sun} alt="" className='w-[20px] h-[20px]' />
            <img src={Moon} alt="" className='w-[20px] h-[20px]' />
            <motion.div
              className='w-[35px] h-[35px] rounded-[80%] absolute cursor-pointer bg-[#2a3e85]'
              style={{ left: theme.state.darkMode ? '35px' : '0' }}
              onClick={handleToggle}
              layout
              transition={spring}
            />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
