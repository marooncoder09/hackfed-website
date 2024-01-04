import React from 'react';
import '../Wrappers/wrapperCSS/WrapperTwo.css'; // Make sure to create this CSS file
import AboutUs from '../components/AboutUs';
const RedSection = () => {
  return (
    <div className="red-section">
    <div className="about-us-container">
      <AboutUs />
    </div>
    {/* You can add more content here that will be aligned to the right */}
  </div>

  );
}

export default RedSection;
