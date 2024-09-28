import React, { FC, useEffect, useState } from 'react';
import { navbarWrapper } from './navbar.styled';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

interface navbarProps {}

const Navbar: FC<navbarProps> = () => {
   // Get the current path using the useLocation hook
   const location = useLocation();
   // State to track the active link
   const [activeLink, setActiveLink] = useState<string>('about');

   // Update the active link when the location changes
   useEffect(() => {
      const path = location.pathname.substring(1) || 'home'; // Remove the '/' and handle empty path as 'home'
      setActiveLink(path);
   }, [location]);


   // Function to handle the click event
  const handleClick = (link: string) => {
      setActiveLink(link);
   };


   return (<nav id='navbar' className='nav-links'>
      <div>
      <ul>
         <li><Link to="/about" className={activeLink==='about' ? 'active' : ''} onClick={()=> handleClick('about')}>About</Link></li>
         <li><Link to="/experience" className={activeLink==='experience' ? 'active' : ''} onClick={()=> handleClick('experience')}>Experience</Link></li>
         <li><Link to="/contact" className={activeLink==='contact' ? 'active' : ''} onClick={()=> handleClick('contact')}>Contact</Link></li>
      </ul>
      </div>
   </nav>)
};

export default Navbar;
