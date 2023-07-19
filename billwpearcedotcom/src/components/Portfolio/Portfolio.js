import React, { useState } from 'react';
import './Portfolio.scss'; // Import your CSS styles for Portfolio component
import Modal from '../Modal/Modal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data (replace this with your actual project data)
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
    },
    {
      id: 3,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
    },
    {
      id: 4,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
    },
    {
      id: 5,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
    },
    {
      id: 6,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
    },
    // Add more projects as needed
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && <Modal project={selectedProject} closeModal={closeModal} isOpen={!!selectedProject} />}
    </div>
  );
};

export default Portfolio;
