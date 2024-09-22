import React, { FC, useState } from 'react';
import { navbarWrapper } from './navbar.styled';
import './navbar.css';
import { Link } from 'react-router-dom';

interface navbarProps {}

const Navbar: FC<navbarProps> = () => {
   // State to track the active link
   const [activeLink, setActiveLink] = useState<string>('about');

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
