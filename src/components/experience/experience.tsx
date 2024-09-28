import React, { FC, useEffect, useState } from 'react'
import './experience.css'
import mermaid from 'mermaid'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaPython, FaReact, FaJava, FaAngular } from 'react-icons/fa6'
import { DiMongodb } from 'react-icons/di'
import { BsFiletypeSql } from 'react-icons/bs'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiOpenai } from 'react-icons/si'
import { LuFileJson2 } from 'react-icons/lu'
import apigeeLogo from '../../images/apigee_image.png' // Use ReactComponent

interface experienceProps {}

const Experience: FC<experienceProps> = () => {
  React.useEffect(() => {
    mermaid.initialize({ startOnLoad: true })
    mermaid.contentLoaded()
  }, [])

  const experienceTimeline = [
    {
      date: 'Jun 2020 - Sep 2020',
      title: 'Software Developer Intern @ Informatica',
      location: 'Dublin, Ireland',
      techStack: (
        <>
          <FaReact style={{ marginRight: '5px' }} />
          <FaJava style={{ marginRight: '5px' }} />
          <DiMongodb style={{ marginRight: '5px' }} />
        </>
      ),
      description: '',
      icon: (
        <img src='https://media.licdn.com/dms/image/v2/C560BAQEV9kECiZwXrg/company-logo_200_200/company-logo_200_200/0/1656645409373/informatica_logo?e=1735776000&v=beta&t=H2mg8nEnpOdv_llQIeQf-Qq3V-Leq1ASr9PgrvJ9Jhw' />
      ),
    },
    {
      date: 'Sep 2020 - Oct 2022',
      title: 'Technology Analyst @ Citi',
      location: 'Dublin, Ireland',
      techStack: (
        <>
          <FaAngular style={{ marginRight: '5px' }} />
          <FaJava style={{ marginRight: '5px' }} />
          <BsFiletypeSql style={{ marginRight: '5px' }} />
        </>
      ),
      description: '',
      icon: (
        <img src='https://media.licdn.com/dms/image/v2/D4E0BAQFgF4xtqyXBcg/company-logo_100_100/company-logo_100_100/0/1719257286385/citi_logo?e=1735776000&v=beta&t=r7bdpFL280ArCxtV08NDspBxDwQID81zphNuyySDvlQ' />
      ),
    },
    {
      date: 'Oct 2022 - Jul 2024',
      title: 'Applications Developer @ Marsh McLennan Innovation Center',
      location: 'Dublin, Ireland',
      techStack: (
        <>
          <FaReact style={{ marginRight: '5px' }} />
          <FaPython style={{ marginRight: '5px' }} />
          <DiMongodb style={{ marginRight: '5px' }} />
          <TbBrandJavascript style={{ marginRight: '5px' }} />
          <SiOpenai style={{ marginRight: '5px' }} />
          <LuFileJson2 style={{ marginRight: '5px' }} />
          <img
            src={apigeeLogo}
            alt='Custom Logo'
            style={{
              width: '17px',
              height: '17px',
              marginTop: '5px',
              filter: 'brightness(0) invert(0)',
            }}
          />
        </>
      ),
      description: '',
      icon: (
        <img src='https://media.licdn.com/dms/image/v2/D4E0BAQGDawDsi0V0pA/company-logo_100_100/company-logo_100_100/0/1719858734714/marshmclennan_logo?e=1735776000&v=beta&t=qnPnlffax0WVld4IqUmEZhND9nNZYSUY9CcRtY5BnJo' />
      ),
    },
  ]

  // return <div className='experience'>
  //   {/* <div className="mermaid">
  //     {`
  //     %%{init: { 'logLevel': 'debug' , 'themeVariables': {
  //               'cScale0': '#D3B6A3', 'cScaleLabel0': '#000000',
  //               'cScale1': '#D3B6A3', 'cScaleLabel1': '#000000',
  //               'cScale2': '#D3B6A3', 'cScaleLabel2': '#000000',
  //               'cScale3': '#D3B6A3', 'cScaleLabel3': '#000000',
  //               'cScale4': '#D3B6A3', 'cScaleLabel4': '#000000',
  //               'lineColor': '#D3B6A3',
  //               'timelineTextColor': '#000000'
  //        } } }%%
  //     timeline
  //       title Work Experience Timeline
  //       section 2020
  //           Jun - Sep: SDE Intern @ Informatica :
  //           Sep - Dec: Technology Analyst @ Citi : Enhanced the application for the Assurance & Treasury team. : Angular Framework + Java 8 with Springboot Framework + SQL

  //       section 2021
  //           Jan - Aug: Technology Analyst @ Citi : Enhanced the application for the Assurance & Treasury team. : Angular Framework + Java 8 with Springboot Framework + SQL
  //           Sep - Dec: Technology Analyst @ Citi : Contributed to the migration and maintenance of a Futures Online Platform. : Ext JS to Angular Framework migration + Java 8 + SQL

  //       section 2022
  //           Jan - Oct: Technology Analyst @ Citi : Contributed to the migration and maintenance of a Futures Online Platform. : Ext JS to Angular Framework migration + Java 8 + SQL : Prometheus Project for Networking - Hosted post-COVID era events to reconnect people within the organization, planning ice-breaking engagement activities.
  //           Oct - Dec: Applications Developer @ MarshMcLennan Innovation Center : Part of newly developed team responsible for making Proof Of Concepts : Understanding Business and Stakeholders, Roles and Responsibilities, Making Goals and Policies for the team

  //       section 2023
  //           Jan - Dec: Applications Developer @ MarshMcLennan Innovation Center : Created different Proof of Concepts Leveraing LLMs - to name a few - Document Extraction, Search within SEC Filings, Analysis of Census Data : Implementation of Company's Internal LLM Chatbot LenAI : Community building and training about AI across the organization

  //       section 2024
  //       Jan - Jul: Applications Developer @ MarshMcLennan Innovation Center : Finding and adapting more usecases of LLM within the organization : Building APIs using APIGee : Won - Team of the Year award at Analytics and AI Awards, by The Analytics Institute for showcasing exceptional teamwork and achieving positive business outcomes.
  //       Aug - Present: Self Learning : Working with what I have learned so far and building projects on my own.
  //     `}
  //   </div> */}

  // </div>

  /**
   * TODO:
   * Change the text color of the date based on the background color assigned to the main element
   */
  // Utility function to determine if a color is light or dark
  const isColorDark = (bgColor: string) => {
    // Convert hex color to RGB
    const hex = bgColor.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    // Calculate the relative luminance
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

    // Return true if the color is dark, else false
    return luminance < 140 // You can adjust the threshold if needed
  }

  // State to manage background color and text color
  const [bgColor, setBgColor] = useState('#D3B6A3') // Initial background color
  const [textColor, setTextColor] = useState('black') // Initial text color

  // Update text color based on the current bgColor
  useEffect(() => {
    const newTextColor = isColorDark(bgColor) ? 'white' : 'black'
    setTextColor(newTextColor)
  }, [bgColor]) // Re-run this effect whenever bgColor changes

  // Example of how you might change the background color
  const changeBackgroundColor = () => {
    // This could be any logic to update the bgColor
    setBgColor(bgColor === '#3498db' ? '#f39c12' : '#3498db')
  }

  return (
    <>
      <div className='experience'>
        <VerticalTimeline lineColor='black'>
          {experienceTimeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              position={index % 2 == 0 ? 'left' : 'right'}
              date={item.date}
              dateClassName={`timeline-date-${textColor}`}
              contentStyle={{
                background: index % 2 == 0 ? '#D3B6A3' : '#634029',
                color: index % 2 == 0 ? 'black' : 'white',
              }}
              contentArrowStyle={{ borderRight: '7px solid #A86D42' }}
              iconStyle={{
                display: 'flex',
                justifyContent: 'center',
                background: 'transparent',
                color: '#3498db',
                border: '2px solid #3498db',
                padding: '16px',
                marginRight: '4px',
              }}
              icon={item.icon}
            >
              <h3 className='vertical-timeline-element-title'>{item.title}</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                {item.location}
              </h4>
              <p>{item.techStack}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience
