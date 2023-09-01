import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';

import './Modal.scss'; // Import your CSS styles for Modal component

const Modal = ({ project, closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null); // Track the starting X position of the touch event
  const tagEmojis = '🎟️';

  useEffect(() => {
    if (project && !isOpen) {
      setShouldAnimate(true);
    }
  }, [project, isOpen]);

  useEffect(() => {
    if (shouldAnimate) {
      setIsOpen(true);
    }
  }, [shouldAnimate]);

  const handleCloseModal = () => {
    setShouldAnimate(false);
    console.log('sup');
  };

  const handleTransitionEnd = () => {
    if (!shouldAnimate && isOpen) {
      setIsOpen(false);
      closeModal();
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDistance = touchEndX - touchStartX;

    if (touchDistance > 50) {
      // If the touch distance is greater than 50 pixels to the left, close the modal
      handleCloseModal();
    }
  };

  return (
    <div
      className={`modal-overlay ${
        isOpen && shouldAnimate ? 'open' : ''
      }`}
      onTransitionEnd={handleTransitionEnd}
      onClick={handleCloseModal}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`modal-content ${
          isOpen && shouldAnimate ? 'open' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-wrapper">
          <div class="close" onClick={handleCloseModal} />
        </div>
        {project && (
          <div className="project-content_wrapper">
            <h2>
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                {project.title}
              </a>
            </h2>
            <p>{project.description}</p>
            <div className="modal-tag-container">
              {Array.from(project.tags).map((tag) => (
                <Button
                  key={tag}
                  className="tag selected"
                  // onClick={() => toggleTag(tag)}
                >
                  {`${tagEmojis} ${tag}`}
                </Button>
              ))}
            </div>
            <div className="image-container">
              {project.imageArray.map((imagePath) => (
                <a href={imagePath} target="_blank" rel="noreferrer">
                  <img
                    key={imagePath}
                    src={imagePath}
                    alt={project.title}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
