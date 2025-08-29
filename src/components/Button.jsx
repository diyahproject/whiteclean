import React from 'react';

const Button = ({ children, className, onClick, ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
