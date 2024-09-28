import React, { FC } from 'react'
import { experienceWrapper } from './experience.styled'
import './experience.css';
import mermaid from 'mermaid';
import experience from './experience.lazy';

interface experienceProps {}

const Experience: FC<experienceProps> = () => {
React.useEffect(() => {
  mermaid.initialize({ startOnLoad: true });
  mermaid.contentLoaded();
}, [])

return <div className='experience'>
  <div className="mermaid">
    {`
    %%{init: { 'logLevel': 'debug' , 'themeVariables': {
              'cScale0': '#D3B6A3', 'cScaleLabel0': '#000000',
              'cScale1': '#D3B6A3', 'cScaleLabel1': '#000000',
              'cScale2': '#D3B6A3', 'cScaleLabel2': '#000000',
              'cScale3': '#D3B6A3', 'cScaleLabel3': '#000000',
              'cScale4': '#D3B6A3', 'cScaleLabel4': '#000000',
              'lineColor': '#D3B6A3', 
              'timelineTextColor': '#000000'
       } } }%%
    timeline
      title Work Experience Timeline
      section 2020
          Jun - Sep: SDE Intern @ Informatica : React + Javascript with Dropwizard Framework + MongoDB
          Sep - Dec: Technology Analyst @ Citi : Enhanced the application for the Assurance & Treasury team. : Angular Framework + Java 8 with Springboot Framework + SQL

      section 2021
          Jan - Aug: Technology Analyst @ Citi : Enhanced the application for the Assurance & Treasury team. : Angular Framework + Java 8 with Springboot Framework + SQL
          Sep - Dec: Technology Analyst @ Citi : Contributed to the migration and maintenance of a Futures Online Platform. : Ext JS to Angular Framework migration + Java 8 + SQL

      section 2022
          Jan - Oct: Technology Analyst @ Citi : Contributed to the migration and maintenance of a Futures Online Platform. : Ext JS to Angular Framework migration + Java 8 + SQL : Prometheus Project for Networking - Hosted post-COVID era events to reconnect people within the organization, planning ice-breaking engagement activities.
          Oct - Dec: Applications Developer @ MarshMcLennan Innovation Center : Part of newly developed team responsible for making Proof Of Concepts : Understanding Business and Stakeholders, Roles and Responsibilities, Making Goals and Policies for the team

      section 2023
          Jan - Dec: Applications Developer @ MarshMcLennan Innovation Center : Created different Proof of Concepts Leveraing LLMs - to name a few - Document Extraction, Search within SEC Filings, Analysis of Census Data : Implementation of Company's Internal LLM Chatbot LenAI : Community building and training about AI across the organization  

      section 2024
      Jan - Jul: Applications Developer @ MarshMcLennan Innovation Center : Finding and adapting more usecases of LLM within the organization : Building APIs using APIGee : Won - Team of the Year award at Analytics and AI Awards, by The Analytics Institute for showcasing exceptional teamwork and achieving positive business outcomes.
      Aug - Present: Self Learning : Working with what I have learned so far and building projects on my own.
    `}
  </div>
</div>
}

export default Experience