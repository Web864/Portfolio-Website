import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-page">
     {/* About Section */}
      <section className="about">
        <h1 className="about-title">
          👋 Hi, I’m <span className="highlight">Rabia</span>
        </h1>
        <p className="about-text">
          A passionate and <b>self-motivated Web Developer</b> with expertise in{" "}
          <b>HTML, CSS, JavaScript, and React.js</b>.  
          I love building <b>modern, responsive, and user-friendly</b> websites
          that bring ideas to life. Along with my development journey, I also
          have strong skills in <b>technical support, networking, and IT
          troubleshooting</b>.  
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

      {/* Experience Section */}
      <section className="experience">
        <h2>🚀 Experience</h2>
        <div className="experience-list">
          
          {/* Current Job */}
          <div className="experience-item">
            <h3>🏫 <b>IT & Technical Support</b> – The Logic School System, Khurrianwala</h3>
            <p className="duration"><b>16-12-2022 – Present</b></p>
            <ul>
              <li>Installed and configured <b>hardware/software</b>.</li>
              <li>Managed <b>system upgrades</b> and troubleshooting.</li>
              <li>Maintained <b>office records and documentation</b>.</li>
              <li>Provided <b>tech support & training</b> to staff.</li>
              <li>Handled <b>printing, composing, and IT maintenance</b>.</li>
              <li>Dealt with <b>visitors</b> and resolved technical issues.</li>
            </ul>
          </div>

          {/* Internship */}
          <div className="experience-item">
            <h3>🌐 <b>Web Development Intern</b> – Technotch</h3>
            <p className="duration"><b>3 Months</b></p>
            <ul>
              <li>Built <b>dynamic web apps</b> using <b>HTML, CSS, MySQL, PHP</b>.</li>
              <li>Worked on <b>front-end interfaces</b> and <b>data-driven web pages</b>.</li>
              <li>Gained <b>hands-on experience</b> in development and deployment.</li>
            </ul>
          </div>

          {/* Freelance */}
          <div className="experience-item">
            <h3>💻 <b>Freelance Web Developer</b></h3>
            <p className="duration"><b>2023 – 2024</b></p>
            <ul>
              <li>Developed <b>portfolio websites</b> for small businesses and startups.</li>
              <li>Customized <b>WordPress themes</b> and plugins.</li>
              <li>Delivered <b>fully responsive</b> and <b>SEO-optimized</b> designs.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
