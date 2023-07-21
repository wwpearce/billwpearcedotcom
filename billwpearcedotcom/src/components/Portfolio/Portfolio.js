import React, { useState } from 'react';
import './Portfolio.scss'; // Import your CSS styles for Portfolio component
import Modal from '../Modal/Modal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTags, setSelectedTags] = useState(new Set());

  // Sample project data with tags
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag1', 'Tag2'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag2', 'Tag3'],
    },
    // Add more projects with tags as needed
  ];

  // Create a set of unique tags from the projects
  const allTags = new Set(projects.flatMap((project) => project.tags));

  // Filter the projects based on selected tags
  const filteredProjects = selectedTags.size
    ? projects.filter((project) => project.tags.some((tag) => selectedTags.has(tag)))
    : projects;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleTag = (tag) => {
    const newSelectedTags = new Set(selectedTags);
    if (selectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  return (
    <div className="portfolio">
      <div className="tag-container">
        {Array.from(allTags).map((tag) => (
          <button
            key={tag}
            className={`tag ${selectedTags.has(tag) ? 'selected' : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
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
