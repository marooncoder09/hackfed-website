import React from 'react';
import '../Wrappers/wrapperCSS/ImageWrapper.css'; // Make sure to create this CSS file

const ImageWrapper = () => {
  return (
    <div className="image-section">
      <img src="imageWrapper.png" alt="Descriptive Text" />
      <h1 className="image-section-title" data-text="HackFed">HackFed</h1>
      <h4 className="image-section-temp" data-text="Coming-Soon">Coming Soon</h4>
    </div>
  );
}

export default ImageWrapper;
