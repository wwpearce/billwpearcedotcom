import React, { useState } from 'react';
import './Portfolio.scss'; // Import your CSS styles for Portfolio component
import Modal from '../../components/Modal/Modal';

import { ReactComponent as WorkScripSVG } from '../../img/Work-02.svg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTags, setSelectedTags] = useState(new Set());

  // Sample project data with tags
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Design', 'Logos', 'Illustration', 'Web Design'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Web Design', 'Design', 'Front-end Development'],
    },
    {
      id: 3,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Front-end Development', 'Shopify', 'Squarespace'],
    },
    {
      id: 4,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag2', 'Tag3'],
    },
    {
      id: 5,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag1', 'Tag2'],
    },
    {
      id: 6,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag2', 'Tag3'],
    },
    {
      id: 7,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag1', 'Tag2'],
    },
    {
      id: 8,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag2', 'Tag3'],
    },
    {
      id: 9,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag1', 'Tag2'],
    },
    {
      id: 10,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Tag2', 'Tag3'],
    },
    // Add more projects with tags as needed
  ];

  // Create a set of unique tags from the projects
  const allTags = new Set(
    projects.flatMap((project) => project.tags)
  );

  // Filter the projects based on selected tags
  const filteredProjects = selectedTags.size
    ? projects.filter((project) =>
        project.tags.some((tag) => selectedTags.has(tag))
      )
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

  const handleSelectChange = (event) => {
    const tag = event.target.value;
    toggleTag(tag);
  };

  return (
    <div className="portfolio-inner-wrapper">
      <WorkScripSVG className="animate-svg" />
      <div className="tag-container">
        <select value="" onChange={handleSelectChange}>
          <option value="" disabled>
            Select a tag
          </option>
          {Array.from(allTags).map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {Array.from(selectedTags).map((tag) => (
          <button
            key={tag}
            className="tag selected"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          closeModal={closeModal}
          isOpen={!!selectedProject}
        />
      )}
    </div>
  );
};

export default Portfolio;
