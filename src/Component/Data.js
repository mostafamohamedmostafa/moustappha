import React from "../img/react.png";
import Javascript from "../img/java-script.png";
import WordPress from "../img/wordpress.png";
import Git from "../img/Git.png";
import SEO from "../img/SEO.png";
import BootStrap from "../img/bootstrap.png";
import designs from "../img/ui-design.png";
import CSS from "../img/Css.png";
import HTML5 from "../img/Html.png";

import Techvalleylogo from "../img/Tech-Valley-Egypt-Logo-1024x1024.png";
import Tybiafishlogo from "../img/Tybiafishlogo.png";


import CarFixing from "../img/CarFixing.jpg";
import modernresume from "../img/modernresume.jpg";
import multiuse from "../img/multiuse.png";
import companyresume from "../img/companyresume.png";
import PersonalResume from "../img/PersonalResume.jpg";
import Commingsoon from "../img/Commingsoon.png";
import todoapp from "../img/todoapp.png";
import IOS17 from "../img/ios17.jpg";
import MACM1 from "../img/MACM1.png";
import Softwaredemo from "../img/Servicesproviderwebsitedemo.jpg";
import Servicesprovider from "../img/ServiceProvider.png";
import Resturantwebsitedemo from "../img/Resturantwebsitedemo.jpg";
import CompanyWebsite from "../img/CompanyWebsite.png";
import Productlandingpage from "../img/ProductLandingPage.jpg";
import DiceGame from "../img/dice.gif";
import Matchinggame from "../img/Matchinggame.png";
import Calculator from "../img/Calculator.png";
import AwesomeCrop from "../img/AwesomeCrop.png";

const education = [
  {
    year: "2024",
    Educationfrom: "Coursera",
    Educationname: "Meta Front-End Developer Professional",
    Educationdescription:
      "9 course series (Introduction to Front-End Development, Programming with JavaScript , Version Control ,HTML and CSS in depth ,React Basics ,Advanced React ,Principles of UX/UI Design ,Front-End Developer Capstone,Coding Interview Preparation)",
  },
  {
    year: "2020",
    Educationfrom: "Udacity",
    Educationname: "Web Development Professional",
    Educationdescription:
      "Web Development Professional (JavaScript & The DOM, Web APIs and Asynchronous Applications, Digital Freelancing - Intro ,Digital Freelancing - Pro )",
  },
  {
    year: "2019",
    Educationfrom: "Udacity",
    Educationname:
      "Nano Degree Intro to Programming Languages, Computer Programming  ",
    Educationdescription:
      "(Studied and Practice and making projects using Python ,Java Script ,Css , HTML)",
  },
  {
    year: "2019",
    Educationfrom: "Technology Innovation and Entrepreneurship Center (TIEC) ",
    Educationname:
      "NTL Intro to Programming Nanodegree from Udacity , Computer Programming ",
    Educationdescription: "",
  },
  {
    year: "2019",
    Educationfrom: "Udacity  ",
    Educationname: "Front-End Development Track",
    Educationdescription: "",
  },
  {
    year: "2019",
    Educationfrom: "freeCodeCamp   ",
    Educationname:
      "Responsive Web Design Certification, Developer Certification",
    Educationdescription:
      "Responsive Web Design Certification, Developer Certification, representing approximately 300 hours of coursework ",
  },
];

const Skills = [
  { IMG: React, IMGALT: "React", Description: "React" },
  { IMG: Javascript, IMGALT: "Javascript", Description: "Javascript" },
  { IMG: WordPress, IMGALT: "WordPress", Description: "WordPress" },
  { IMG: Git, IMGALT: "Git", Description: "Git" },
  { IMG: SEO, IMGALT: "SEO", Description: "SEO" },
  { IMG: BootStrap, IMGALT: "BootStrap", Description: "BootStrap" },
  { IMG: designs, IMGALT: "designs", Description: "Ui Design" },
  { IMG: CSS, IMGALT: "CSS", Description: "CSS" },
  { IMG: HTML5, IMGALT: "HTML5", Description: "HTML5" },
];

const WorkExperience = [
  {
    year: "2021 ",
    WorkExperiencefrom: "Upwork ",
    WorkExperience: " FreeLancer Web Developer",
  },
  {
    year: "2021 ",
    WorkExperiencefrom: "FreeLancer ",
    WorkExperience: " FreeLancer Front End Web Developer",
  },
  { year: " ", WorkExperiencefrom: " ", WorkExperience: " " },
];

const ProjectsMade = [
  {
    ProjectName: "  Tech Valley Egypt Website",
    ProjectDescription: " Create Website For Software Company ",
    ProjectTechnologies: "WordPress , WordPress Plugines ",
    Year: "2021",
    IMG: Techvalleylogo,
    IMGAlt: "Techvalleylogo",
    Link: "https://techvalleyegypt.com/",
  },
  {
    ProjectName: "Tybia Fish Resturant   ",
    ProjectDescription:
      " Desgin , Create , Develope and Hosting Tybia Fish Resturant Website ",
    ProjectTechnologies: "WordPress , WordPress Plugines",
    Year: "2021",
    IMG: Tybiafishlogo,
    IMGAlt: "Tybiafishlogo",
    Link: "https://tybafish.com/",
  },
];
const DemosProjects = [
  {
    ProjectName: "Multi Use - Car Fixing Shop Project",
    ProjectDemosDescription: "Multi Use - Car Fixing Shop Project",
    ProjectDemosTechnologies:
      " React Js , Bootstrap , Aos Animation , React Router , React Icons , GitHub Pages ",
    Year: "2024",
    IMG: CarFixing,
    IMGAlt: "Multi Use - Car Fixing Shop Project",
    Link: "https://mostafamohamedmostafa.github.io/Carz/",
    LinkRef: "https://cras-three.vercel.app/index.html",
    LinkText: "Here",
  },
  {
    ProjectName: "Multi Use - Morden  Demo Project",
    ProjectDemosDescription: "Morden Multi  Use  Website  ",
    ProjectDemosTechnologies:
      " React Js , Bootstrap , Aos Animation , React Router , React Icons , GitHub Pages ",
    Year: "2024",
    IMG: modernresume,
    IMGAlt: "Morden Multi Use  Resume",
    Link: "https://mostafamohamedmostafa.github.io/morden-resume/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: "Multi Use  Demo Project",
    ProjectDemosDescription: " Multi Use  Website  ",
    ProjectDemosTechnologies:
      " React Js , Bootstrap , Aos Animation , React Router , React Icons , GitHub Pages ",
    Year: "2024",
    IMG: multiuse,
    IMGAlt: "Multi Use  Demo",
    Link: "https://mostafamohamedmostafa.github.io/multiuse/",
    LinkRef: "",
    LinkText: "",
  },

  {
    ProjectName: "Company Resume Demo Project",
    ProjectDemosDescription: " Company Resume  ",
    ProjectDemosTechnologies:
      " React Js , Bootstrap , Aos Animation , React Router , React Icons , GitHub Pages ",
    Year: "2024",
    IMG: companyresume,
    IMGAlt: "Personal Resume",
    Link: "https://mostafamohamedmostafa.github.io/company-resume",
    LinkRef: "",
    LinkText: "",
  },

  {
    ProjectName: "Personal Resume Demo Project",
    ProjectDemosDescription: " Personal Resume  ",
    ProjectDemosTechnologies:
      " React Js , Bootstrap , Aos Animation , React Router , React Icons , GitHub Pages ",
    Year: "2024",
    IMG: PersonalResume,
    IMGAlt: "Personal Resume",
    Link: "https://mostafamohamedmostafa.github.io/personal-resume-react/",
    LinkRef: "https://noxfolio.vercel.app/",
    LinkText: "Here",
  },
  {
    ProjectName: "ToDO List",
    ProjectDemosDescription: "Add,Update,Delete,Check Todo list App   ",
    ProjectDemosTechnologies: "React Js ,Hooks , Bootstrap , Fontawesome ",
    Year: "2024",
    IMG: todoapp,
    IMGAlt: "Todo List App",
    Link: "https://mostafamohamedmostafa.github.io/React-Todo/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: " E Commerce Website",
    ProjectDemosDescription:
      " Create ,Desgin ,Develope ECommerce Website  Demo   ",
    ProjectDemosTechnologies: "React Js ",
    Year: "2024",
    IMG: Commingsoon,
    IMGAlt: "Techvalleylogo",
    Link: "https://mostafamohamedmostafa.github.io/smart-store/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: "  Apple IOS 17 website colon",
    ProjectDemosDescription: " Apple IOS 17 website colon Demo   ",
    ProjectDemosTechnologies: ": React js , Git , Git Pages , Bootstrap    ",
    Year: "2023",
    IMG: IOS17,
    IMGAlt: "Apple IOS 17 website colon",
    Link: "https://mostafamohamedmostafa.github.io/ios17/",
    LinkRef: "https://www.apple.com/eg/ios/ios-17/",
    LinkText: "Click Here",
  },
  {
    ProjectName: "  Apple MACBOOK M1 website colon",
    ProjectDemosDescription: " Apple MACBOOK M1 website colon Demo   ",
    ProjectDemosTechnologies: ": React js , Git , Git Pages , Bootstrap    ",
    Year: "2023",
    IMG: MACM1,
    IMGAlt: "Apple MACBOOB M1 website colon",
    Link: "https://mostafamohamedmostafa.github.io/macbookm1react/",
    LinkRef: " https://www.apple.com/macbook-air/",
    LinkText: "Click Here",
  },
  {
    ProjectName: " Software Tech website demo",
    ProjectDemosDescription:
      " Create ,Desgin ,Develope Software Tech website demo   ",
    ProjectDemosTechnologies:
      "React js , Git , Git Pages , Bootstrap , React Router , Aos Animations ",
    Year: "2024",
    IMG: Softwaredemo,
    IMGAlt: "Techvalleylogo",
    Link: "https://mostafamohamedmostafa.github.io/software-tech-website/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: " Services provider website demo",
    ProjectDemosDescription:
      " Create ,Desgin ,Develope Services provider website   Demo   ",
    ProjectDemosTechnologies:
      "React js , Git , Git Pages , Bootstrap , React Router , Aos Animations ",
    Year: "2023",
    IMG: Servicesprovider,
    IMGAlt: "Services provider website demo",
    Link: "https://mostafamohamedmostafa.github.io/fixingwebsiteservice/",
    LinkRef: "",
    LinkText: "",
  },

  {
    ProjectName: "Restaurant website demo ",
    ProjectDemosDescription: "Desgin ,Develope Restaurant website demo  ",
    ProjectDemosTechnologies: "Wordpress , Wordpress plugins",
    Year: "2022",
    IMG: Resturantwebsitedemo,
    IMGAlt: "Restaurant website demo",
    Link: "https://restaurant.techvalleyegypt.com/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: "  Company Website  Demo   ",
    ProjectDemosDescription:
      " Create ,Desgin ,Develope Company Website  Demo   ",
    ProjectDemosTechnologies: "React Js ",
    Year: "2023",
    IMG: CompanyWebsite,
    IMGAlt: "Company Website  Demo",
    Link: "https://mostafamohamedmostafa.github.io/company-react-website-2/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: " Product Landing Page Website",
    ProjectDemosDescription:
      " Create ,Desgin ,Develope Product Landing Page Website  Demo   ",
    ProjectDemosTechnologies: "React Js ",
    Year: "2024",
    IMG: Productlandingpage,
    IMGAlt: "Product Landing Page",
    Link: "https://mostafamohamedmostafa.github.io/react-product-landing/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: " Dice Game",
    ProjectDemosDescription: " Create  ,Develope Dice Game   ",
    ProjectDemosTechnologies: "  Js ",
    Year: "2019",
    IMG: DiceGame,
    IMGAlt: "Dice Game  ",
    Link: "https://mostafamohamedmostafa.github.io/dicegame/",
    LinkRef: "",
    LinkText: "",
  },

  {
    ProjectName: " Matching Game",
    ProjectDemosDescription:
      " Develope Matching Game (Matching 2 cards images togetther)   ",
    ProjectDemosTechnologies: " Js ",
    Year: "2019",
    IMG: Matchinggame,
    IMGAlt: "Matching Game",
    Link: "https://mostafamohamedmostafa.github.io/matching-game/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: " Basic Calculator ",
    ProjectDemosDescription:
      " Basic Calculator with comparison and mathematical operations   ",
    ProjectDemosTechnologies: "  Js ",
    Year: "2019",
    IMG: Calculator,
    IMGAlt: "Basic Calculator ",
    Link: "https://mostafamohamedmostafa.github.io/Basic-Calc/",
    LinkRef: "",
    LinkText: "",
  },
  {
    ProjectName: " Awesome Crop Demo Website ",
    ProjectDemosDescription:
      "    Create ,Desgin ,Develope Awesome Company Website  Demo  ",
    ProjectDemosTechnologies: " Html , Css , BootStrap   ",
    Year: "2020",
    IMG: AwesomeCrop,
    IMGAlt: "Awesome Crop Demo Website ",
    Link: "https://mostafamohamedmostafa.github.io/Awesome-Crop/",
    LinkRef: "",
    LinkText: "",
  },
];
export { education, Skills, WorkExperience, ProjectsMade, DemosProjects };
