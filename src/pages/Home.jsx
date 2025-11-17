import React from "react";
import "../App.css";
import Projects from "./Projects"; 
import HomeImg from "../Images/Home.jpeg";
import { Typewriter } from "react-simple-typewriter";



function Home() {
  return (

    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I’m Rabia 👩‍💻</h1>
          <p className="hero-subtitle">
           A passionate  <br />
          <Typewriter
  words={["Web Developer", "building modern", "responsive", "creative websites"]}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/></p>

          {/* Button scrolls to Projects section */}
          <a href="#projects" className="btn">
            View My Work
          </a>
        </div>
        {/* Hero Image */}
        <div className="hero-image">
          <img
            src= {HomeImg}
            alt="Rabia Web Developer"
            className="animated-img"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a dedicated and self-motivated web developer with a strong foundation
          in <b>HTML, CSS, JavaScript, and React.js</b>. I love creating engaging
          and user-friendly web applications that provide value and solve real-world
          problems. My focus is on writing clean, efficient code and bringing ideas
          to life through design and development.
        </p>
      </section>

      {/* Skills Section */}
       <section className="skills">
        <h2>💡 My Skills</h2>
        <div className="skills-grid">
          <ul>
            <li>⚡ <b>HTML / CSS / JavaScript / React.js</b></li>
            <li>⚡ <b>Responsive Web Design</b></li>
            <li>⚡ <b>MySQL / PHP (Basic)</b></li>
            <li>⚡ <b>Git & GitHub</b></li>
          </ul>
          <ul>
            <li>⚡ <b>MS Office & Documentation</b></li>
            <li>⚡ <b>Computer Networking</b></li>
            <li>⚡ <b>Hardware & Software Installation</b></li>
            <li>⚡ <b>Troubleshooting & Technical Support</b></li>
            <li>⚡ <b>Organizational & Problem-Solving Skills</b></li>
          </ul>
        </div>
      </section>

      {/* ✅ Projects Section (NOW USED) */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <Projects /> {/* ✅ actually using Projects */}
      </section>
    </div>
  );
}

export default Home;
