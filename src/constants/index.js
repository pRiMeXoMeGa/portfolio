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
      "Led customer engagements to showcase web solutions, achieving a 20% boost in client satisfaction through tailored demonstrations.",
      "Collaborated with cross-functional teams to create Proof of Concept (POC) solutions, reducing project timelines by 15% and enhancing delivery speed.",
      "Communicated technical solutions to stakeholders, translating POC results into actionable strategies that improved decision-making efficiency by 25%.",
      "Designed a dynamic frontend for the funnel application, enhancing predictive capabilities and increasing forecasting accuracy by 30%.",
      "Partnered with backend teams to ensure seamless integration, optimizing frontend performance and reducing load times by 40%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "LTIMindtree",
    icon: lti,
    iconBg: "#383E56",
    date: "July 2022 - June-2024",
    points: [
      "Engineered an Outlook plugin (App-In) that analyzes insurance-related emails, boosting user productivity by 25% through actionable insights.",
      "Trained an open-source LLM on mailbox content, enhancing user comprehension by 40% with precise mailcontext summaries.",
      "Fine-tuned the LLM using legacy data for Insurance BU solutions via Azure OpenAI, achieving a 30% increase in model accuracy.",
      "Established robust data privacy policies on the CanvasAI platform, ensuring compliance and significantly enhancing user trust in generative AI applications.",
      "Integrated Azure OpenAI service with Python and Flask, improving compliance by 20% while aligning with client policies.",
      "Collaborated with the DevOps team to dockerize applications and deploy them on AKS, cutting deployment time by 50%.",
      "Transformed the India Payroll SSC portal for L&T Group, improving user experience for over 300k users and driving a 30% increase in daily engagement.",
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
      "Involved in the Spring Boot Rest API for the development.",
      "Designed and developed several Web REST APIs using Spring Boot, MySQL PostgreSQL.",
      "Implemented Web API Services for CRUD operations.",
      "Experienced in B2B integration (SOAP, REST, etc.) for seamless business connectivity.",
      "Good experience with Jenkins for running pipeline to build and test project.",
      "Involved in agile methodologies using TEST DRIVEN DEVELOPMENT(TDD).",
      "Extensive experience working under Agile methodologies environment (scrum, Kanban).",
      "Participating in code reviews and providing constructive feedback to other developers."
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