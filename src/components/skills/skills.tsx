import React, { FC } from 'react';
import './skills.css';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
   const numPoints = 350; // Number of points along the spiral
   const spiralPath = [];

   // Generate points for secondary (overlay) spiral
   for (let i = 0; i < numPoints; i++) {
     const angle = 0.1 * i;
     const radius = 0.9 * i; // Slight offset for the overlay spiral, and adjusted size
     const x = radius * Math.cos(angle);
     const y = radius * Math.sin(angle);
     spiralPath.push(`${x},${y}`);
   }
 
   const spiralPoints = spiralPath.join(" ");
 
   return (
     <div className="svg-container circle skills">
       <svg viewBox="-600 -600 1200 1200" xmlns="http://www.w3.org/2000/svg">
         <polyline
           points={spiralPoints}
           stroke="#D3A588"  /* Lighter color for the overlay spiral */
           strokeWidth="50"
           fill="none"
         />
       </svg>
     </div>
   );
};

export default Skills;
