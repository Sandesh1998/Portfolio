// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import java from "./assets/images/Skills/java.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "../src/assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";


import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SANDESH",
    LastName: "POUDEL",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "8+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "User Interface(UI)",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Back-end Development",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Graphic Designing",
        logo: ps,
      },
      {
        name: "React js",
        para: "Front-end Development",
        logo: reactjs,
      },
      {
        name: "Java",
        para: "OOP",
        logo: java,
      },
      {
        name: "Python",
        para: "Data Science",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Designing and developing responsive and user-friendly websites using HTML, CSS, and JavaScript.Developing back-end solutions using server-side programming languages such as Node.js and Python and frameworks such as Express and Django.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Collaborating with developers and other stakeholders to ensure design implementation aligns with project requirements and meets high-quality standards.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "Designing high-quality graphics and visual elements using Photoshop for digital and print media",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Say Svāsthya ",
        image: project1,
      },
      {
        title: "FUND NEPAL",
        image: project2,
      },
      {
        title: "KHOJAM APP",
        image: project3,
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Available for freelance, contract, or full-time opportunities",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sandesh.poudel1998@gmail.com",
        icon: GrMail,
      },
      {
        text: "+977 9814161764",
        icon: MdCall,
      },
      {
        text: "pdlsandesh",
        icon: BsInstagram,
        link: "https://www.instagram.com/pdl_sandesh",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
