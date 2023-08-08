import React from 'react';

const ImageDisplay = ({ imageName }) => {
  const imagePath = require(`../assets/${imageName}`);
  console.log(imagePath.default);
  return <img src={imagePath.default} alt={imageName} />;
};

export default ImageDisplay;
