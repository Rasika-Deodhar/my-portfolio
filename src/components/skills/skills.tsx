import React, { FC } from 'react';
import './skills.css';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  const numPoints = 400; // Number of points along the spiral
  const spiralPath = [];
  const pathId = "spiralPath"; // ID for the path to link text

  // Generate points for the spiral
  for (let i = 0; i < numPoints; i++) {
    const angle = 0.1 * i;
    const radius = 0.9 * i; // Adjust radius to expand the spiral
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    spiralPath.push(`${x},${y}`);

     // Log the coordinates to inspect
      if (i % 10 === 0) {
         console.log(`Point ${i}: x = ${x}, y = ${y}`);
      }
  }
  
  const spiralPoints = spiralPath.join(" ");
  console.log(spiralPoints)

   const circles = [
      // Comfort zone
      { cx: -20, cy: 0, r: 30, label: 'Python' },
      { cx: 50, cy: -20, r: 30, label: 'Generative AI' },
      { cx: 0, cy: -60, r: 30, label: 'React' },
      { cx: 40, cy: 85, r: 30, label: 'Prompting' },
      { cx: 85, cy: 35, r: 30, label: 'Googling' },
      { cx: 100, cy: -75, r: 30, label: 'Typescript' },
      { cx: -40, cy: 70, r: 30, label: 'Angular' },
      
      // Growth Zone
      { cx: 40, cy: 185, r: 30, label: 'JavaScript' },
      { cx: -50, cy: -190, r: 30, label: 'Testing' },
      { cx: -80, cy: 185, r: 30, label: 'Vector Search' },
      { cx: 200, cy: 95, r: 30, label: 'MongoDB' },
      { cx: 220, cy: 5, r: 30, label: 'SQL' },
      { cx: -150, cy: 0, r: 30, label: 'Java' },

      // Learning Zone
      { cx: -270, cy: 85, r: 30, label: 'Apigee' },
      { cx: -250, cy: -85, r: 30, label: 'Presentation' },
      { cx: -205, cy: 200, r: 60, label: 'Open Source Contributions' },
      { cx: -150, cy: -255, r: 50, label: 'Business Analysis' },

      // Exploration Zone
      // { cx: 40, cy: 85, r: 30, label: 'Project Management' },
      // { cx: 40, cy: 85, r: 30, label: 'Business Analysis' },
      // { cx: 40, cy: 85, r: 30, label: 'Data Analysis' },
      // { cx: 40, cy: 85, r: 30, label: 'Cyber Security' },

    ].map((circle, index) => (
      <g key={index}>
        {/* Circle */}
        <circle cx={circle.cx} cy={circle.cy} r={circle.r} fill="#A86D42" />
        {/* Text inside circle */}
        <text
          x={circle.cx}
          y={circle.cy}
          fill="#fff"                // Text color
          fontSize="10"              // Adjust font size
          textAnchor="middle"        // Horizontally center the text
          alignmentBaseline="middle" // Vertically center the text
        >
          {circle.label}
        </text>
      </g>
    ));
 

  return (
    <div className="svg-container circle skills">
      <svg viewBox="-600 -600 1200 1200" xmlns="http://www.w3.org/2000/svg">
        {/* Define the spiral path */}
        <path
          id={pathId}
          d={`M ${spiralPoints}`}
          stroke="#D3A588"  /* Lighter color for the spiral */
          strokeWidth="50"
          fill="none"
        />
        {/* Multiple text elements at intervals along the spiral */}
        <text fill="#634029" fontSize="24">
          <textPath href={`#${pathId}`} startOffset="6%">
            Comfort Zone
          </textPath>
        </text>
        <text fill="#634029" fontSize="24">
          <textPath href={`#${pathId}`} startOffset="35%">
            Growth Zone
          </textPath>
        </text>
        <text fill="#634029" fontSize="24">
          <textPath href={`#${pathId}`} startOffset="75%">
            Learning Zone
          </textPath>
        </text>
        <text fill="#634029" fontSize="24">
          <textPath href={`#${pathId}`} startOffset="87%">
            Exploration Zone
          </textPath>
        </text>
        {circles}
      </svg>
    </div>
  );
};

export default Skills;
