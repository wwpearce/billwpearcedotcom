import React, { useState } from 'react';
import './Portfolio.scss'; // Import your CSS styles for Portfolio component
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

import { ReactComponent as WorkScripSVG } from '../../img/Work-02.svg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTags, setSelectedTags] = useState(new Set());

  const tagEmojis = '🎟️';
  // #️⃣
  // Sample project data with tags
  const projects = [
    {
      id: 1,
      title: 'Football Café',
      description:
        'Web development (in React) and custom code for Shopify.',
      linkUrl: 'https://www.footballcafe.com',
      imageUrl: '/thumbs/thumbs--football_cafe.jpg',
      imageArray: [
        '/img/portfolio/football-cafe/img-1.png',
        '/img/portfolio/football-cafe/img-2.png',
        '/img/portfolio/football-cafe/img-3.png',
        '/img/portfolio/football-cafe/img-4.png',
        '/img/portfolio/football-cafe/img-5.png',
        '/img/portfolio/football-cafe/img-6.png',
        '/img/portfolio/football-cafe/img-7.jpg',
        '/img/portfolio/football-cafe/img-8.jpg',
        '/img/portfolio/football-cafe/img-9.jpg',
        '/img/portfolio/football-cafe/img-10.jpg',
        '/img/portfolio/football-cafe/img-11.jpg',
      ],
      tags: ['Development', 'Web Development', 'Shopify Development'],
    },
    {
      id: 2,
      title: 'Colwell Studios',
      description: '',
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
      id: 3,
      title: 'noonehome',
      description: '',
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
      id: 8,
      title: 'Secret Futébol Club',
      description:
        'Secret Futébol Club is a design collective (in addition to a soccer team) that produces one of a kind jerseys, tshirts, hats, and other merch.',
      linkUrl: 'https://www.instagram.com/secretfutbolclub/',
      imageUrl: '/thumbs/thumbs--sfc.jpg',
      imageArray: [
        '/img/portfolio/sfc/img-1.jpg',
        '/img/portfolio/sfc/img-2.jpg',
        '/img/portfolio/sfc/img-3.jpg',
        '/img/portfolio/sfc/img-4.jpg',
        '/img/portfolio/sfc/img-5.jpg',
        '/img/portfolio/sfc/img-6.jpg',
        '/img/portfolio/sfc/img-7.jpg',
        '/img/portfolio/sfc/img-8.jpg',
        '/img/portfolio/sfc/img-9.jpg',
        '/img/portfolio/sfc/img-10.jpg',
        '/img/portfolio/sfc/img-11.jpg',
      ],
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
      id: 5,
      title: 'Tea Lady',
      description: 'Ongoing work as a consultant Creative Director',
      imageUrl: '/thumbs/thumbs--tealady.jpg',
      linkUrl: 'https://www.tealadybk.com/',
      imageArray: [
        '/img/portfolio/tea-lady/img-0.jpg',
        '/img/portfolio/tea-lady/img-1.png',
        '/img/portfolio/tea-lady/img-2.png',
        '/img/portfolio/tea-lady/img-3.png',
        '/img/portfolio/tea-lady/img-4.jpg',
        '/img/portfolio/tea-lady/img-5.jpg',
        '/img/portfolio/tea-lady/img-6.jpg',
      ],
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
      title: 'Forrest & Groves',
      description: '',
      imageUrl: '/thumbs/thumbs--forrest_and_groves.jpg',
      linkUrl: 'https://www.instagram.com/forrestandgroves',
      imageArray: [
        '/img/portfolio/forrest-and-groves/img-1.jpg',
        '/img/portfolio/forrest-and-groves/img-2.jpg',
        '/img/portfolio/forrest-and-groves/img-3.jpg',
        '/img/portfolio/forrest-and-groves/img-4.jpg',
        '/img/portfolio/forrest-and-groves/img-5.jpg',
        '/img/portfolio/forrest-and-groves/img-6.jpg',
        '/img/portfolio/forrest-and-groves/img-7.jpg',
        '/img/portfolio/forrest-and-groves/img-8.jpg',
      ],
      tags: ['Design', 'Identity', 'Logo Design', 'Typography'],
    },
    {
      id: 4,
      title: 'WWE',
      description:
        'Built the navigation and other front-end components for this site almost a decade ago.',
      linkUrl: 'https://www.wwe.com/',
      imageUrl: '/thumbs/thumbs--wwe.jpg',
      imageArray: [
        '/img/portfolio/wwe/wwe-01.jpg',
        '/img/portfolio/wwe/wwe-02.jpg',
        '/img/portfolio/wwe/wwe-03.jpg',
        '/img/portfolio/wwe/wwe-04.jpg',
      ],
      tags: ['Development', 'Web Development'],
    },
    {
      id: 7,
      title: 'Wickman House',
      description:
        'Logo and type designed a decade ago; still in use.',
      imageUrl: '/thumbs/thumbs--wickman_house.jpg',
      linkUrl: 'https://www.wickmanhouse.com/',
      imageArray: [
        '/img/portfolio/wickman-house/img-1.jpg',
        '/img/portfolio/wickman-house/img-2.jpg',
        '/img/portfolio/wickman-house/img-3.jpg',
        '/img/portfolio/wickman-house/img-4.jpg',
        '/img/portfolio/wickman-house/img-5.jpg',
        '/img/portfolio/wickman-house/img-6.jpg',
        '/img/portfolio/wickman-house/img-7.jpg',
        '/img/portfolio/wickman-house/img-8.jpg',
        '/img/portfolio/wickman-house/img-9.jpg',
        '/img/portfolio/wickman-house/img-10.jpg',
        '/img/portfolio/wickman-house/img-11.jpg',
        '/img/portfolio/wickman-house/img-12.jpg',
      ],
      tags: ['Design', 'Identity', 'Logo Design', 'Typography'],
    },
    // {
    //   id: 9,
    //   title: 'Diamondheart Muay Thai',
    //   description: '',
    //   linkeUrl: 'https://physicalculturecollective.com/',
    //   imageUrl: '/thumbs/thumbs--diamond_heart.jpg',
    //   imageArray: [
    //     '/img/portfolio/noonehome/mobile-1.jpg',
    //     '/img/portfolio/noonehome/mobile-2.jpg',
    //     '/img/portfolio/noonehome/mobile-3.jpg',
    //     '/img/portfolio/noonehome/mobile-4.jpg',
    //     '/img/portfolio/noonehome/img-1.jpg',
    //     '/img/portfolio/noonehome/img-2.jpg',
    //     '/img/portfolio/noonehome/img-3.jpg',
    //     '/img/portfolio/noonehome/img-4.jpg',
    //   ],
    //   tags: [
    //     'Design',
    //     'Illustration',
    //     'Typography',
    //     'Poster Design',
    //     'Hand Lettering',
    //   ],
    // },
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
      <WorkScripSVG className="animate-svg script-svg" />
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
