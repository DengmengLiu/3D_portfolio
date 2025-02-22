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
        "<strong>Daily Task Management: </strong><br />Developed detailed daily work plans by breaking down project tasks into actionable steps with specific timelines, ensuring efficient execution. ollaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "<strong>Issue Resolution: </strong><br />Proactively communicated any challenges to my supervisor, collaboratively discussing and integrating solutions into daily work routines to maintain project momentum.",
      ],
    },
    {
      title: "Bake Section Leader",
      company_name: "Bakerie@",
      icon: bakerie,
      iconBg: "#E6DEDD",
      date: "March 2022 - January 2024",
      points: [
        "<strong>Process Improvement: </strong><br />Increased daily output by 10% while maintaining a 99% quality pass rate through batch processing and task prioritization; implemented a task checklist signature system to ensure 100% task accountability.",
        "<strong>Team Management: </strong><br />Led a 3–4member team, enhancing morale through daily communications and reducing turnover by 25%; developed a hands-on training program for new hires, with 80% exceeding performance benchmarks within one month. ",
      ],
    },
    {
      title: "Coles Services",
      company_name: "Coles",
      icon: coles,
      iconBg: "#E6DEDD",
      date: "January 2018 - January 2020",
      points: [
        "<strong>Workflow Optimization: </strong><br />Redesigned task allocation—strategically planning clean routes and adjusting trolley collection intervals based on busy and idle periods—to reduce task completion time by 15% and maintain trolley availability at 95%+ during peak hours. ",
        "<strong>Training Enhancement: </strong><br />Trained over 2 new hires on store protocols and cleanliness standards, improving overall store cleanliness by 20% and enhancing the customer shopping experience. ",
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