import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, disabled }) => {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      <h3>{children}</h3>
    </button>
  );
};

export default Button;
