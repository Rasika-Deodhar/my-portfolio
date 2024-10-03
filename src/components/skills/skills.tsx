import React, { FC } from 'react';
import './skills.css';

interface skillsProps {}

const skills: FC<skillsProps> = () => {

const Circle: React.FC<{ size: string | number; color: string }> = ({ size, color }) => {
  return (
    <div className="circle" style={{ width: size, height: size, backgroundColor: color }}></div>
  );
};    
return(
 <div className='skills'>
    <h1>TODO: Skills Component</h1>
    <div>
      <Circle size="50px" color="red" />
      <Circle size="100px" color="blue" />
    </div>
 </div>)
};

export default skills;
