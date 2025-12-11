import React, { FC, useState } from "react";
import "./experience.css";
import mermaid from "mermaid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaPython,
  FaReact,
  FaJava,
  FaAngular,
  FaJenkins,
  FaGithub,
} from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import apigeeLogo from "../../images/apigee_image.png";
import { SiSwagger, SiGithubactions } from "react-icons/si";

interface experienceProps {}

const Experience: FC<experienceProps> = () => {
  React.useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  // const [] = useState<number | null>(null) // Single state to track hovered index

  const techStackStyle = {
    marginRight: "5px",
    transform: isHovered ? "scale(1.4)" : "scale(1)",
    transition: "transform 0.3s ease-in-out, background 0.3s ease-in-out",
  };

  const experienceTimeline = [
    {
      date: "Oct 2022 - Jul 2024",
      title: "Applications Developer @ Marsh McLennan Innovation Center",
      location: "Dublin, Ireland",
      techStack: (
        <>
          <FaReact style={techStackStyle} />
          <FaPython style={techStackStyle} />
          <DiMongodb style={techStackStyle} />
          <TbBrandJavascript style={techStackStyle} />
          <SiOpenai style={techStackStyle} />
          <LuFileJson2 style={techStackStyle} />
          <FaGithub style={techStackStyle} />
          <SiGithubactions style={techStackStyle} />
          <img
            src={apigeeLogo}
            alt="Custom Logo"
            style={{
              width: "17px",
              height: "17px",
              marginTop: "5px",
              filter: "brightness(0) invert(0)",
              transform: isHovered ? "scale(1.4)" : "scale(1)",
              transition:
                "transform 0.3s ease-in-out, background 0.3s ease-in-out",
            }}
          />
        </>
      ),
      description: "",
      icon: <img src="/media/mmc.png" alt="MMC logo" />,
    },
    {
      date: "Sep 2020 - Oct 2022",
      title: "Technology Analyst @ Citi",
      location: "Dublin, Ireland",
      techStack: (
        <>
          <FaAngular style={techStackStyle} />
          <FaJava style={techStackStyle} />
          <BsFiletypeSql style={techStackStyle} />
          <FaJenkins style={techStackStyle} />
        </>
      ),
      description: "",
      icon: <img src="/media/citi.png" alt="Citi Logo" />,
    },
    {
      date: "Jun 2020 - Sep 2020",
      title: "Software Developer Intern @ Informatica",
      location: "Dublin, Ireland",
      techStack: (
        <>
          <FaReact style={techStackStyle} />
          <FaJava style={techStackStyle} />
          <DiMongodb style={techStackStyle} />
          <SiSwagger style={techStackStyle} />
        </>
      ),
      description: "",
      icon: <img src="/media/informatica.png" alt="Citi Logo" />,
    },
    {
      date: 'Jul 2017 - Jul 2019',
      title: 'Software Developer @ Xoriant',
      location: 'Pune, India',
      techStack: (
        <>
          <FaAngular style={techStackStyle} />
          <FaJava style={techStackStyle} />
          <BsFiletypeSql style={techStackStyle} />
          <LuFileJson2 style={techStackStyle} />
          <DiMongodb style={techStackStyle} />
          <SiSwagger style={techStackStyle} />
          <FaJenkins style={techStackStyle} />
        </>
      ),
      description: '',
      icon: (
        <img
          src='https://www.xoriant.com/sites/default/files/logo/Xoriant-Logo-Scroll.png'
          width='190%'
          height='auto'
          alt='Xoriant Logo'
        />
      ),
    },
  ];

  // Utility function to determine if a color is light or dark
  // No effect needed: colors come from CSS variables (data-theme)

  return (
    <>
      <div className="experience">
        <VerticalTimeline lineColor="var(--text)">
          {experienceTimeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              position={index % 2 === 0 ? "left" : "right"}
              date={item.date}
              dateClassName={`timeline-date`}
              contentStyle={{
                background: index % 2 === 0 ? "#D3B6A3" : "#634029",
                color: index % 2 === 0 ? "black" : "white",
              }}
              contentArrowStyle={{ borderRight: "7px solid #A86D42" }}
              iconStyle={{
                display: "flex",
                justifyContent: "center",
                background: "transparent",
                color: "#3498db",
                border: "2px solid #3498db",
                padding: "16px",
                marginRight: "4px",
              }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {item.techStack}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
