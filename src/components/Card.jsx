import React from 'react';

const Card = ({ children, className }) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

export default Card;
