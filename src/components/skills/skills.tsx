import React, { FC } from 'react';
import { skillsWrapper } from './skills.styled';

interface skillsProps {}

const skills: FC<skillsProps> = () => (
 <div className={skillsWrapper}>
    Skills Component
 </div>
);

export default skills;
