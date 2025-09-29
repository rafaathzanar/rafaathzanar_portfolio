import {
  uomlogo,
  zcklogo,
  discordBlack,
  linkedin,
  github,
  file02,
  homeSmile,
  plusSquare,
  transitgopic,
  project2,
  project3,
  project4,
  searchMd,
  yourlogo,
  react,
  java,
  javascript,
  kafka,
  spring,
  golang,
  mysql,
  tailwind,
  cpp,
  arduino,
  materialui,
} from "../assets";
import schoolimage from "../assets/education/school.jpg";
import universityimage from "../assets/education/university.jpg";
export const navigation = [
  {
    id: "0",
    title: "Profile",
    url: "#about",
  },
  {
    id: "1",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Education",
    url: "#education",
  },
  {
    id: "4",
    title: "Expertise",
    url: "#expertise",
  },

  {
    id: "5",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const experiences = [
  {
    id: "0",
    company: "PickMe - Digital Mobility Solutions",
    role: "Intern Software Engineer",
    location: "Colombo, Sri Lanka",
    period: "March 2025 – September 2025",
    highlights: [
      "Developed microservices in Golang with multi-tenancy support across services, ensuring tenant-specific configurations and scalable architecture.",
      "Implemented and executed unit testing across backend services.",
      "Configured monitoring and observability with Grafana, Prometheus, New Relic, and Kibana to improve debugging and reliability.",
      "Deployed services across development, staging, and production using GitLab CI/CD and Argo CD.",
      "Worked with MySQL by writing and optimizing queries within backend services.",
      "Integrated Apache Kafka for event-driven communication with tenant-specific producers, consumers, and event flows.",
    ],
    technologies: [
      { name: "GoLang", logo: golang },
      { name: "Kafka", logo: kafka },
      { name: "MySQL", logo: mysql },
      { name: "Spring", logo: spring },
      { name: "React", logo: react },
    ],
  },
];

export const projects = [
  {
    id: "1",
    title: "Playera",
    text:
      " Playera is a cutting-edge web app designed to revolutionize how sports enthusiasts book venues in Sri Lanka. Whether it's futsal courts, badminton courts, cricket grounds, or swimming pools, Playera offers a seamless and user-friendly experience.",
    date: "Sept 2025",
    status: "done",
    imageUrl: project2,
    link: "https://github.com/orgs/Playera-UOM/repositories",
    technologies: [
      { name: "React", logo: react },
      { name: "Spring", logo: spring },
      { name: "MySQL", logo: mysql },
      { name: "Tailwindcss", logo: tailwind },
    ],
  },
  {
    id: "0",
    title: "TransitGO",
    text:
      "A Mobile and Web Application designed to transform public bus transportation. This project tackles challenges in bus transportation, including providing real-time updates on bus schedules, managing delays, and improving communication between passengers and operators.",
    date: "May 2024",
    status: "done",
    imageUrl: transitgopic,
    colorful: true,
    link: "https://github.com/orgs/Transitgo-UOM-Project/repositories",
    technologies: [
      { name: "React", logo: react },
      { name: "Spring", logo: spring },
      { name: "MySQL", logo: mysql },
      { name: "MaterialUI", logo: materialui },
    ],
  },
  {
    id: "4",
    title: "Metro Mobiles - Online Electronic Store",
    text:
      "Built an online electronics store that provides a seamless platform to browse, purchase, and manageelectronic products. The project was built using a microservices architecture, including user service, productservice, and ordering service.",
    date: "Dec 2024",
    status: "done",
    imageUrl: transitgopic,
    colorful: true,
    link: "https://github.com/orgs/Metro-Mobiles/repositories",
    technologies: [
      { name: "React", logo: react },
      { name: "Spring", logo: spring },
      { name: "MySQL", logo: mysql },
      { name: "MaterialUI", logo: materialui },
    ],
  },

  {
    id: "2",
    title: "Personal Portfolio",
    text: "Designed a personal portfolio to showcase my skill and projects.",
    date: "Sept 2024",
    status: "done",
    imageUrl: project3,
    link: "https://rafaathzanar-portfolio.vercel.app",
    technologies: [
      { name: "React", logo: react },
      { name: "Tailwindcss", logo: tailwind },
    ],
  },
  {
    id: "3",
    title: "Rooftop Garden",
    text:
      "Our goal was to design an efficient and sustainable automated rooftop greenhouse",
    date: "Aug 2022",
    status: "done",
    imageUrl: project4,
    link: "https://github.com/rafaathzanar/Level-1-Hardware-Rooftop-Greenhouse",
    technologies: [
      { name: "C++", logo: cpp },
      { name: "Arduino", logo: arduino },
    ],
  },
];

export const expertiseContents = [
  {
    id: "0",
    title: "SpringBoot",
  },

  {
    id: "1",
    title: "GoLang",
  },

  {
    id: "2",
    title: "ReactJS",
  },

  {
    id: "3",
    title: "Java",
  },
  {
    id: "4",
    title: "React Native",
  },
  {
    id: "5",
    title: "MySQL",
  },
  {
    id: "6",
    title: "JavaScript",
  },
  {
    id: "7",
    title: "Kafka",
  },
  {
    id: "8",
    title: "MongoDB",
  },
];

export const expertiseApps = [
  {
    id: "1",
    title: "Spring Boot",
    icon: spring,
    width: 34,
    height: 36,
  },
  {
    id: "3",
    title: "Java",
    icon: java,
    width: 34,
    height: 35,
  },

  {
    id: "2",
    title: "MySQL",
    icon: mysql,
    width: 36,
    height: 28,
  },

  {
    id: "0",
    title: "ReactJs",
    icon: react,
    width: 26,
    height: 36,
  },

  {
    id: "7",
    title: "ReactNative",
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "JavaScript",
    icon: javascript,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Kafka",
    icon: kafka,
    width: 40,
    height: 40,
  },
  {
    id: "4",
    title: "GoLang",
    icon: golang,
    width: 60,
    height: 60,
  },
];

export const education = [
  {
    id: "0",
    title: "University Of Moratuwa",
    text:
      "I am currently pursuing a Bachelor's degree in Information Technology and Management at the University of Moratuwa, where I am gaining deep expertise in Software Engineering.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    text1: "BSc. (Hons) in Information Techonology and Management",
    logo1: uomlogo,
    iconUrl: uomlogo,
    imageUrl: universityimage,
    light: true,
  },
  {
    id: "1",
    title: "Zahira National College Kalmunai",
    text:
      "I successfully completed both my G.C.E. Ordinary Level and G.C.E. Advanced Level examinations at a prestigious and renowned institution, recognized for its excellence. ",
    backgroundUrl: "./src/assets/education/card-1.svg",
    iconUrl: zcklogo,
    imageUrl: schoolimage,
    text0: "G.C.E Ordinary Level",
    text1: "G.C.E Advanced Level - Physical Science Stream",
    logo1: zcklogo,
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/rafaathzanar/",
  },
  {
    id: "1",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/rafaathzanar",
  },

  {
    id: "2",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/users/932567025816068126",
  },
];
