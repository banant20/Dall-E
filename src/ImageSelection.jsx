import React, { useState } from "react";
import "./ImageSelection.css";
import dog from "./images/dog.jpeg";
import lion from "./images/lion.jpeg";
import panda from "./images/panda.jpeg";
import suit from "./images/suit.jpeg";
import dress from "./images/dress.jpeg";
import hat from "./images/hat.jpeg";
import basketball from "./images/basketball.jpeg";
import tennis from "./images/tennis.jpeg";
import guitar from "./images/guitar.jpeg";
import collo from "./images/collo.jpeg";
import taj from "./images/taj.jpeg";
import tower from "./images/tower.jpeg";

const categories = [
  {
    name: "Choose an Animal",
    images: [
      { src: dog, description: "dog" },
      { src: lion, description: "lion" },
      { src: panda, description: "panda" },
    ],
  },
  {
    name: "Choose An Item of Clothing",
    images: [
      { src: suit, description: "blue suit" },
      { src: hat, description: "sombrero" },
      { src: dress, description: "pink dress" },
    ],
  },
  {
    name: "Choose An Activity",
    images: [
      { src: guitar, description: "the guitar" },
      { src: basketball, description: "basketball" },
      { src: tennis, description: "tennis" },
    ],
  },
  {
    name: "Choose A Location",
    images: [
      { src: collo, description: "The Colosseum" },
      { src: taj, description: "The Taj Mahal" },
      { src: tower, description: "The Eiffel Tower" },
    ],
  },
];

const createSentence = (selectedImages) => {
  const phrases = [
    "A photo of a",
    "wearing a",
    "playing",
    "outside of the",
  ];

  return selectedImages
    .map((description, index) => `${phrases[index]} ${description}`)
    .join(" ");
};

export const ImageSelection = ({ setUserPrompt }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleImageClick = (image) => {
    setSelectedImages([...selectedImages, image.description]);
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
    } else {
      const sentence = createSentence([...selectedImages, image.description]);
      console.log("Created sentence:", sentence);
      setUserPrompt(sentence);
    }
  };

  const renderImages = () => {
    return categories[currentCategory].images.map((image) => (
      <div
        className="image-card"
        key={image.description}
        onClick={() => handleImageClick(image)}
      >
        <img src={image.src} alt={image.description} className="category-image" />
      </div>
    ));
  };
  

  return (
    <div className="image-selection">
      <h2>{categories[currentCategory].name}</h2>
      <div className="image-container">{renderImages()}</div>
    </div>
  );
};