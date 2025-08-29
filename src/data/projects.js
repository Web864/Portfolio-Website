// src/data/projects.js

import ExpenceTrackerImg from "../Images/Expence-Tracker.png";

// E-Commerce multiple images
import EcommerceImg from "../Images/E-commerce..png";
import EcommerceImg1 from "../Images/E-commerce -3.png";
import EcommerceImg2 from "../Images/E-commerce -2.png";
import EcommerceImg3 from "../Images/E-commerce -1.png";

// Quiz App images
import QuizImg from "../Images/Quize.png";

// Oprolex Portfolio images
import OprolexImg from "../Images/Oprolex.png";
import OprolexImg1 from "../Images/Oprolex-1.png";
import OprolexImg2 from "../Images/Oprolex-2.png";

// Calculator images
import CalculatorImg from "../Images/Calculator.png";
import CalculatorImg1 from "../Images/Calculator-1.png";

const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "Track your expenses with a clean UI and persistent storage.",
    images: [ExpenceTrackerImg],
    tags: ["React", "Tailwindcss"],
    github: "https://github.com/Web864/expense-tracker-fixed.git",
    demo: "https://www.linkedin.com/posts/rabia-naz-01263b339_expensetracker-reactjs-tailwindcss-activity-7367097621808615424-b7sH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFT9VU4BohBhiDIYcVyO05SS9pxtbeAg3jM",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce site with product pages, cart, and checkout.",
    images: [EcommerceImg, EcommerceImg1, EcommerceImg2, EcommerceImg3],
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Web864/e-commerce-website.git",
    demo: "https://www.linkedin.com/posts/rabia-naz-01263b339_portfolioproject-webdevjourney-developershowcase-activity-7367090597876219904-QCvV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFT9VU4BohBhiDIYcVyO05SS9pxtbeAg3jM",
  },
  {
    id: 3,
    title: "Quiz App",
    description: "An interactive quiz app with score tracking and timer. Built with React, React Router, and Context API.",
    images: [QuizImg],
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Web864/quiz-app-with-score-and-timer.git",
    demo: "https://www.linkedin.com/posts/rabia-naz-01263b339_javascriptprojects-webdevelopment-frontenddevelopment-activity-7367093342708441088-tDVf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFT9VU4BohBhiDIYcVyO05SS9pxtbeAg3jM",
  },
  {
    id: 4,
    title: "Oprolex Portfolio",
    description: "My personal portfolio showcasing projects, skills, and contact form. Built with React, Tailwind, and Framer Motion.",
    images: [OprolexImg, OprolexImg1, OprolexImg2],
    tags: ["HTML", "CSS"],
    github: "https://github.com/Web864/Fisrt-Website.git",
    demo: "https://www.linkedin.com/posts/rabia-naz-01263b339_firstproject-oprolex-htmlcss-activity-7367093645616889857-gGOg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFT9VU4BohBhiDIYcVyO05SS9pxtbeAg3jM",
  },
  {
    id: 5,
    title: "Calculator with History",
    description: "A simple calculator app with history functionality. Built with HTML, CSS, and JavaScript.",
    images: [CalculatorImg, CalculatorImg1],
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Web864/calculator-with-History.git",
    demo: "https://www.linkedin.com/posts/rabia-naz-01263b339_javascriptprojects-webdevelopment-htmlcssjs-activity-7367092920056745984-tCOW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFT9VU4BohBhiDIYcVyO05SS9pxtbeAg3jM",
  },
];

export default projects;
