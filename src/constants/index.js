import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    unity,
    tailwind,
    mysql,
    Csharp,
    git,
    swift,
    SQL,
    PHP,
    uts,
    bakerie,
    coles,
    yuda,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C#",
      icon: Csharp,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "PHP",
      icon: PHP,
    },
    {
      name: "mySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Unity",
      icon: unity,
    },
  ];
  
  const experiences = [
    {
      title: "Casual Academic",
      company_name: "University of Technology Sydney",
      icon: uts,
      iconBg: "#E6DEDD",
      date: "August 2024 - December 2024",
      points: [
        "<strong>Project Coordination: </strong><br />Supported my supervisor’s projects—two major initiatives detailed in the Relevant Projects section—by conducting weekly meetings to review the previous week’sprogress and set clear objectives for the coming week. ",
        "<strong>Task Management: </strong><br />Developed detailed daily work plans by breaking down project tasks into actionable steps with specific timelines, ensuring efficient execution. ollaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "<strong>Issue Resolution: </strong><br />Proactively communicated any challenges to my supervisor, collaboratively discussing and integrating solutions into daily work routines to maintain project momentum.",
      ],
    },
    {
      title: "Backend development engineer",
      company_name: "Wuxi YUDA Light industry machinery Factory",
      icon: yuda,
      iconBg: "#E6DEDD",
      date: "January 2024 - July 2024",
      points: [
        "Contributed to the development of the backend for a company’s management system, focusing on API communication and data management, under the guidance of a senior developer.",
        "Assisted in the development of robust and scalable RESTful APIs using .NET Core for the company’s backend management system, working closely with a senior developer.",
        "Participated in the design, implementation, and maintenance of the database schema to ensure efficient data storage and retrieval.",
        "Developed and implemented key backend functionalities and logic using .NET Core, contributing to the smooth operation of the internal management processes.",
        "Facilitated data interaction between the React-based frontend and the backend by contributing to the development and integration of APIs.",
        "Conducted program testing to identify and resolve issues, ensuring the reliability and performance of the backend system.",
      ],
    },
    {
      title: "Bake Section Leader",
      company_name: "Bakerie@",
      icon: bakerie,
      iconBg: "#E6DEDD",
      date: "March 2022 - January 2024",
      points: [
        "<strong>Operations: </strong><br />Directed early morning bakery operations by planning production for croissants, sourdough, baguettes, and pastries based on pre-prepared orders and daily forecasts.",
        "<strong>Scheduling: </strong><br />Managed the scheduling and utilization of four ovens under tight deadlines, optimizing baking sequences to reduce overall production time by 10% and ensure efficient production.",
        "<strong>Supervision: </strong><br />Supervised and trained team members, performing on-the-spot quality checks and prompt defect resolution to uphold product standards while maintaining a 99% quality pass rate.",
        "<strong>Coordination: </strong><br />Coordinated post-shift activities including inventory organization, cold storage rotation, and task delegation with accountability measures, ensuring a seamless transition to the next day’s operations.",
      ],
    },
    {
      title: "Coles Services",
      company_name: "Coles",
      icon: coles,
      iconBg: "#E6DEDD",
      date: "January 2018 - January 2020",
      points: [
        "<strong>Cleaning: </strong><br />Executed comprehensive cleaning of shopping areas, offices, and restrooms within the first two hours of the day, creating a welcoming environment and streamlining store opening processes.",
        "<strong>Organization: </strong><br />Organized and maintained trolley availability during peak hours through effective time management, reducing task completion time by 15% and ensuring availability above 95%.",
        "<strong>Maintenance: </strong><br />Undertook additional weekly maintenance tasks—such as cleaning refrigerators, wiping glass surfaces, and scrubbing produce area floors—to enhance overall store cleanliness by 20%.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FFYE Grant Project",
      description:
        "A project aims to help new students navigate key university processes, such as course enrolment, academic support, and timetable management, through an interactive game-based system. ",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/DengmengLiu/UTS-Prep-Project_FFYE-Grant_Game-based-Learning",
    },
    {
      name: "Satellite Demonstration Project",
      description:
        "A Unity-based demonstration video designed to assist my supervisor in presenting his research on low-earth-orbit (LEO) satellite communication.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/DengmengLiu/Satellites-Demonstration-Project",
    },
    {
      name: "Film-Frenzy",
      description:
        "Film-Frenzy is a mock iOS movie consulting app that leverages The Movie Database (TMDB) API to display information on currently trending and top-rated movies.",
      tags: [
        {
          name: "Xcode",
          color: "blue-text-gradient",
        },
        {
          name: "Swift",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/DengmengLiu/Film-Frenzy",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };