import React from 'react';
import './About.css'; // Your custom styles

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold about-title">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="lead mb-4">
              I’m a third-year Computer Science student specializing in full stack development with Java and Spring Boot.
              I consistently practice data structures and algorithms to sharpen my problem-solving skills. Alongside, I’m exploring cloud technologies to build scalable and reliable applications.
              <br /><br />
              With a focused and consistent learning approach, I strive to write clean, efficient code and apply my skills to practical projects.
              <br /><br />
              I enjoy collaborating with others to bring ideas to life and constantly seek opportunities to learn and grow.
              My goal is to build impactful software that solves real-world problems and makes users' lives easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
