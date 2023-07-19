import React, { useEffect, useState } from 'react';
import './Modal.scss'; // Import your CSS styles for Modal component

const Modal = ({ project, closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

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
  };

  const handleTransitionEnd = () => {
    if (!shouldAnimate && isOpen) {
      setIsOpen(false);
      closeModal();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen && shouldAnimate ? 'open' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      onClick={handleCloseModal}
    >
      <div className={`modal-content ${isOpen && shouldAnimate ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleCloseModal}>
          &times;
        </button>
        {project && (
          <>
            <h2>{project.title}</h2>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
            {/* Add more project details here */}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
