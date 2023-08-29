import React, { useState } from 'react';
import './Portfolio.scss'; // Import your CSS styles for Portfolio component
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

import { ReactComponent as WorkScripSVG } from '../../img/Work-02.svg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTags, setSelectedTags] = useState(new Set());

  const tagEmojis = '📎';
  // #️⃣
  // Sample project data with tags
  const projects = [
    {
      id: 1,
      title: 'Colwell Studios',
      description: 'Description for Project 1',
      linkUrl: 'https://www.colwellstudios.com/',
      imageUrl: '/thumbs/thumbs--colwell_studios.jpg',
      imageArray: [
        '/img/portfolio/colwell-studios/img_1.jpg',
        '/img/portfolio/colwell-studios/img_2.jpg',
        '/img/portfolio/colwell-studios/img_3.jpg',
        '/img/portfolio/colwell-studios/img_4.jpg',
        '/img/portfolio/colwell-studios/img_5.jpg',
      ],
      tags: ['Design', 'Identity', 'Logo Design', 'Typography'],
    },
    {
      id: 2,
      title: 'Football Café',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Development', 'Web Development', 'Shopify development'],
    },
    {
      id: 3,
      title: 'noonehome',
      description: 'Description for Project 1',
      linkUrl: 'https://www.noonehome.com',
      imageUrl: '/thumbs/thumbs--noonehome.jpg',
      imageArray: [
        '/img/portfolio/noonehome/mobile-1.jpg',
        '/img/portfolio/noonehome/mobile-2.jpg',
        '/img/portfolio/noonehome/mobile-3.jpg',
        '/img/portfolio/noonehome/mobile-4.jpg',
        '/img/portfolio/noonehome/img-1.jpg',
        '/img/portfolio/noonehome/img-2.jpg',
        '/img/portfolio/noonehome/img-3.jpg',
        '/img/portfolio/noonehome/img-4.jpg',
      ],
      tags: [
        'Development',
        'Web Development',
        'Squarespace Development',
      ],
    },
    {
      id: 4,
      title: 'WWE',
      description: 'Description for Project 2',
      imageUrl: '/thumbs/thumbs--wwe.jpg',
      imageArray: ['/img/portfolio/wwe/wwe-01.jpg'],
      tags: ['Development', 'Web Development'],
    },
    {
      id: 5,
      title: 'Tea Lady',
      description: 'Description for Project 1',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: [
        'Design',
        'Creative Direction',
        'Development',
        'Illustration',
        'Typography',
        'Web Design',
        'Web Development',
        'Shopify Development',
        'Logo Design',
        'Hand Lettering',
        'Pattern Making',
      ],
    },
    {
      id: 6,
      title: 'Forrest and Groves',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Design', 'Identity', 'Logo Design', 'Typography'],
    },
    {
      id: 7,
      title: 'Wickman House',
      description: 'Description for Project 1',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: ['Design', 'Identity', 'Logo Design', 'Typography'],
    },
    {
      id: 8,
      title: 'Secret Futébol Club',
      description: 'Description for Project 2',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: [
        'Design',
        'Creative Direction',
        'Identity',
        'Illustration',
        'Typography',
        'Merch Design',
        'Logo Design',
        'Hand Lettering',
        'Screen Printing',
      ],
    },
    {
      id: 9,
      title: 'Diamondheart Muay Thai',
      description: 'Diamondheart Muay Thai',
      imageUrl:
        'http://billwpearce.com/assets/media/work/thumbnails/twentyfour.png',
      tags: [
        'Design',
        'Illustration',
        'Typography',
        'Poster Design',
        'Hand Lettering',
      ],
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
            Pick a tag 👇
          </option>
          {Array.from(allTags).map((tag) => (
            <option key={tag} value={tag}>
              {`${tagEmojis} ${tag}`}
            </option>
          ))}
        </select>
        <div className="selected-tags-container">
          {Array.from(selectedTags).map((tag) => (
            <Button
              key={tag}
              className="tag selected"
              onClick={() => toggleTag(tag)}
            >
              {`${tagEmojis} ${tag}`}
            </Button>
          ))}
        </div>
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          closeModal={closeModal}
          isOpen={!!selectedProject}
          tags={selectedProject.tags}
        />
      )}
    </div>
  );
};

export default Portfolio;
