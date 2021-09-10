import React from 'react';

// Component to show when the image is missing from the retrieved data

const NoImage = ({ type }) => {
  return type == 'actor' ? (
    <div className="d-flex justify-content-center align-items-center bg-secondary mx-auto" style={{height: '180px', width: '70%'}}>
      <p className="fs-5">Image missing</p>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center bg-secondary mx-auto" style={{height: '115px', width: '80%'}}>
      <p className="fs-5">Image missing</p>
    </div>
  );
}

export default NoImage;