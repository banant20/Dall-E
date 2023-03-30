import React, { useState } from "react";

export const GenerateImagePage = ({ getImage }) => {
  const [loading, setLoading] = useState(false);

  const handleGenerateImageClick = async () => {
    setLoading(true);
    await getImage();
    setLoading(false);
  };

  return (
    <div className="generate-image-page">
      <h1>Ready to generate your image?</h1>
      <div className="text-and-button-wrapper">
        <p>This could take a sec 	&#x1F609;</p>
        {loading ? (
          <div className="pulsar"></div>
        ) : (
          <div className="button-container">
            <button className="btn-space space" onClick={handleGenerateImageClick}>
              Generate Image!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
