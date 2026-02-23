import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  rp,
  cp,
  reactjs,
  lti,
  researchgate,
  ai,
  fractal,
  tcs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  osesport,
  git,
  github,
  figma,
  angular,
  postgresql,
  mysql,
  springboot,
  angularcert,
  azure,
  java,
  python,
  fastapi,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  divergentpath,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "achievement",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "Spring Boot 3",
  //   icon: springboot,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "fastAPI",
    icon: fastapi,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Engineer (Full Stack)",
    company_name: "Fractal Analytics",
    icon: fractal,
    iconBg: "black",
    date: "June 2024 - Present",
    points: [
      "Client & Solution Delivery: Owned requirement discussions with global enterprise clients, translating business needs into scalable technical architectures and managing successful solution walkthroughs.",
      "MCP & FastMCP Implementation: Designed and developed custom Model Context Protocol (MCP) tools using FastAPI and Python, enabling secure and standardized LLM integration with internal forecasting databases. (Client: PepsiCo)",
      "Multi-Agent Orchestration: Architected a multi-agent system for the \"Funnel Automation\" platform, where agents utilize MCP tools to autonomously retrieve data, run statistical analysis, and generate predictions, increasing accuracy by 50%. (Client: Unilever)",
      "Production RAG Systems: Deployed scalable RAG solutions for decision support, optimizing retrieval using Vector Stores (Pinecone) and PostgreSQL to handle complex enterprise queries.",
      "React Frontend Architecture: Led the frontend development of high-performance conversational UIs. While primarily architected in React/Redux, ensured component modularity.",
      "Engineering Leadership: Led a team of 5 engineers, establishing best practices for schema-driven development and API contracts, ensuring seamless communication between Python backend services and frontend clients."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "LTIMindtree",
    icon: lti,
    iconBg: "#383E56",
    date: "July 2022 - June-2024",
    points: [
      'Azure AI & LLM Integration: Designed a "GenAI Playground" leveraging Azure AI Foundry capabilities, integrating 17+ LLMs (including Azure OpenAI, GPT-4, Anthropic Claude and Bedrock) to provide a unified interface for enterprise users.',
      'Real-Time Streaming & WebSockets: Engineered a low-latency response architecture using WebSockets and Server-Sent Events (SSE), enabling real-time token streaming for a smoother user experience in React applications.',
      'Azure AI & LLM Integration: Designed a "GenAI Playground" leveraging Azure AI Foundry capabilities, integrating 17+ LLMs (including Azure OpenAI, GPT-4, and Bedrock) to provide a unified interface for enterprise users.',
      'Reactive Progressive Web App: Implemented Server-Sent Events and streaming response patterns to deliver real-time AI updates to a React/Redux frontend, ensuring a responsive user experience under high load.',
      'Responsible AI Middleware: Built a proprietary middleware layer that monitors LLM interactions, applying guardrails to filter PII and toxicity checks, and "jailbreak" prevention before requests reach Azure AI endpoints.',
      'Model Fine-Tuning: Collaborated on fine-tuning workflows within the Azure ecosystem, tailoring models for specific insurance and productivity use cases.',
      'Scalable Microservices: Developed robust Python microservices to expose GenAI capabilities, handling authentication (OAuth/JWT) and session management for high-concurrency enterprise workloads.',
      'Collaborated with business, architecture, and delivery teams to move solutions into production faster.  ',
    ],
  },
  {
    title: "Python Developer",
    company_name: "Analyze Infotech",
    icon: ai,
    iconBg: "#383E56",
    date: "Nov 2021 - April 2022",
    points: [
      "Designed and implemented a latency comparison classifier using K-NN, SVM, and Decision Tree models, enhancing fog application performance metrics by 20%.",
      "Engineered a machine learning-driven fog application classifier and scheduler, achieving a 28% reduction in latency and improving resource allocation efficiency.",
    ],
  },
  {
    title: "Asociate System Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Nov 2020",
    points: [
      "Enterprise Integration Development: Supported the development of robust enterprise applications by implementing and managing REST and SOAP integrations to ensure seamless system interoperability.",
      "Defect Resolution & Quality Control: Collaborated closely with QA teams to identify, troubleshoot, and resolve software defects, ensuring high-quality code delivery.",
      "Release Stabilization: Played a key role in stabilizing software releases, contributing to smoother deployments and reliable application performance in production environments.",
      "Process & Documentation Improvement: Took initiative to enhance internal documentation and streamline onboarding processes, improving team efficiency and knowledge transfer.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aqib delivered exceptional work, exceeding expectations. His skills, professionalism, and attention to detail made the project seamless. Highly recommend for anyone needing top-tier development expertise!",
    name: "Rishendra Mishra",
    designation: "COO",
    company: "OS Esports",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE3r5f5-xvyXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718227382992?e=1745452800&v=beta&t=blsOWSa5JZGdTEgMzDF9VqmRxB06P3mLQ6BytzVnBxg",
  },
  {
    testimonial:
      "Aqib is a skilled professional in Generative AI with strong problem-solving abilities and teamwork. His expertise in Python and AI makes him a valuable asset to any team.",
    name: "Sakshi Gupta",
    designation: "Full Stack Developer",
    company: "LTImindtree",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGEQMRbGDU-lg/profile-displayphoto-shrink_400_400/B4DZPd9JkSHUAo-/0/1734595616716?e=1745452800&v=beta&t=WQ8u6N4xWwuB4x5zHgmFvyS2tW1YXGcMpEcZpSsFmWQ",
  },
  {
    testimonial:
      "Aqib is an exceptional full-stack developer and leader, excelling in problem-solving, rapid learning, and team mentorship. His technical expertise and dedication make him a valuable asset to any organization.",
    name: "Kadhiravan G",
    designation: "Software Engineer",
    company: "LTIMindtree",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE1mQeYp3osXQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712806946170?e=1745452800&v=beta&t=8osEdL47b4DEhI2mak3LPdD7fFIKCpzwEWqrO7RohII",
  },
];

const projects = [
  {
    name: "Stock Tracker",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    link_img: github,
    source_code_link: "https://github.com/pRiMeXoMeGa/stockTracker",
  },
  {
    name: "OS Esports",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: osesport,
    link_img: github,
    source_code_link: "https://github.com/pRiMeXoMeGa/OSwebsite",
  },
  {
    name: "E-Commerce website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot 3",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    link_img: github,
    source_code_link: "https://github.com/pRiMeXoMeGa/eCommerce/tree/main/frontEnd/frontEndPart",
  },
  {
    name: "Divergent Path",
    description:
      "Divergent Path offers therapy and coaching services, specializing in mental health support for neurodivergent individuals, including those with ADHD and autism, to enhance well-being and personal growth.",
    tags: [
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: divergentpath,
    link_img: web,
    source_code_link: "https://www.divergentpath.net/",
  },
];

const achievements = [
  {
    name: "Research Paper",
    description:
      "Machine learning for Fog Computing: Review, Opportunities and a ML-based Fog Application Classifier and Scheduler.",
    tags: [
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Jyupter Notebook",
        color: "green-text-gradient",
      },
    ],
    image: rp,
    link_img: researchgate,
    source_code_link: "https://link.springer.com/article/10.1007/s11277-022-10160-y",
  },
  {
    name: "Conference Paper",
    description:
      "Classification of Edge Applications using Decision Tree, K-NN, SVM classifier.",
    tags: [
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Jyupter Notebook",
        color: "green-text-gradient",
      },
    ],
    image: cp,
    link_img: researchgate,
    source_code_link: "https://ieeexplore.ieee.org/document/9887690",
  },
  {
    name: "Microsoft Azure",
    description:
      "Certified Azure developer with 3 years of experience in developing web applications.",
    tags: [
      {
        name: "Azure",
        color: "pink-text-gradient",
      },
      {
        name: "Azure function",
        color: "orange-text-gradient",
      },
      {
        name: "App Service",
        color: "blue-text-gradient",
      },
      {
        name: "Key Vault",
        color: "white-text-gradient",
      },
      {
        name: "Resource Group",
        color: "green-text-gradient",
      },
    ],
    image: azure,
    link_img: web,
    source_code_link: "https://mohdaqib.netlify.app/",
  },
  {
    name: "Angular Level-2 Intermediate",
    description:
      "Certified Angular developer with 2 years of experience in developing web applications using Angular.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Reactive Forms",
        color: "blue-text-gradient",
      },
      {
        name: "Derectives",
        color: "white-text-gradient",
      },
      {
        name: "RxJS",
        color: "green-text-gradient",
      },
    ],
    image: angularcert,
    link_img: angular,
    source_code_link: "https://mohdaqib.netlify.app/",
  },
  
];
export { services, technologies, experiences, testimonials, projects, achievements };