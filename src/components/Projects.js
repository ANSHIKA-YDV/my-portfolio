import React from 'react';
import './Projects.css';

function Projects() {
  const projectData = [
    {
      name: 'Job Boarding Website - JobHuntly',
      desc: 'MERN stack group project to connect job seekers and employers efficiently.',
      link: 'https://github.com/yourusername/jobhuntly',
    },
    {
      name: 'Task Manager Website',
      desc: 'Frontend with React, backend using Spring Boot for managing daily tasks effectively.',
      link: 'https://github.com/yourusername/task-manager',
    },
    {
      name: 'Amazon Clone',
      desc: 'An e-commerce website clone with product browsing, cart, and checkout features.',
      link: 'https://github.com/ANSHIKA-YDV/Amazon-clone',
    },
    {
      name: 'Rock Paper Scissors Game',
      desc: 'Interactive game built with React to play Rock Paper Scissors against the computer.',
      link: 'https://github.com/ANSHIKA-YDV/Rock-Paper-scissors-game',
    },
  ];

  return (
    <section id="projects" className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-info">My Projects</h2>
        <div className="row g-4">
          {projectData.map(({ name, desc, link }, idx) => (
            <div key={idx} className="col-md-6">
              <div className="p-4 rounded bg-secondary bg-opacity-10 border border-info h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-info">{name}</h5>
                  <p>{desc}</p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info mt-3 align-self-start"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
