import React, { useState } from 'react';
import { FaTachometerAlt, FaListAlt, FaHistory, FaFileInvoice, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow relative z-10  ">
      <div className='flex items-center '>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/291/636/small_2x/restaurant-logo-design-vector.jpg" alt="Logo" className="w-16 h-12 rounded-full"/>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li className={`flex items-center space-x-2 cursor-pointer font-montserrat font-semibold ${activeIndex === 0 ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleClick(0)}>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>
          <li className={`flex items-center space-x-2 cursor-pointer font-montserrat font-semibold ${activeIndex === 1 ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleClick(1)}>
            <FaListAlt />
            <span>Order List</span>
          </li>
          <li className={`flex items-center space-x-2 cursor-pointer font-montserrat font-semibold ${activeIndex === 2 ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleClick(2)}>
            <FaHistory />
            <span>History</span>
          </li>
          <li className={`flex items-center space-x-2 cursor-pointer font-montserrat font-semibold ${activeIndex === 3 ? 'text-blue-500' : 'text-gray-400'}`} onClick={() => handleClick(3)}>
            <FaFileInvoice />
            <Link to={'/Ingridients'}>Ingridients</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <FaBell className="text-gray-500 cursor-pointer" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s" alt="Notifications" className="ml-4 w-8 h-8 rounded-full"/>
      </div>
    </nav>
  );
};

export default Navbar;
