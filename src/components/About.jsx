import React from 'react';
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard =({index, title,icon})=>{
  return (
    <Tilt className='xs:w-[200px] w-full'>
      <motion.div 
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[16px] font-bold text-center'>
            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        Senior Generative AI & Full Stack Engineer: Extensive 5+ years experience designing
         scalable and high performing Progressive web applications and enterprise AI solutions,
          leveraging a robust stack including Python, FastAPI, React, and AWS Bedrock.
        Innovator in Agentic AI & MCP: Architected a multi-agent "Funnel Automation"
         system and custom Model Context Protocol (MCP) tools for major clients
          like PepsiCo and Unilever, achieving a 50% increase in prediction accuracy through 
          autonomous data retrieval and statistical analysis.
        LLM Platform Architect: Designed and built a "GenAI Playground" supporting integration with
         17+ LLMs (including OpenAI and Anthropic), incorporating a proprietary Responsible
          AI layer for PII filtration, toxicity checks, and enterprise-grade security.
        Technical Leadership: Led a team of 5 engineers to deliver high-performance React
         conversational UI frontend and python microservices backend, establishing best practices for
          schema-driven development and API contracts between backends and frontends

        </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))} 
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")