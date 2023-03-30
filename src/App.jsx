import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import { ImageSelection } from "./ImageSelection";
import { LandingPage } from "./LandingPage";
import { GenerateImagePage } from "./GenerateImagePage";

console.log("HEYYYYYYYYYYY", import.meta.env.VITE_OPENAI_API_KEY);
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, 
});
const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [imgUrl, setUrl] = useState("");
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showGenerateImagePage, setShowGenerateImagePage] = useState(false);

  const getImage = async () => {
    const params = {
      prompt: userPrompt,
      n: 1,
      size: "512x512",
    };
    const response = await openai.createImage(params);
    const urlData = response.data.data[0].url;
    setUrl(urlData);
  };

  return (
    <main className="App">
      {imgUrl && (
        <img src={imgUrl} className="image" alt="openai api response" />
      )}
      {showLandingPage && (
        <LandingPage onStart={() => setShowLandingPage(false)} />
      )}
      {!showLandingPage && !showGenerateImagePage && (
        <ImageSelection
          setUserPrompt={(prompt) => {
            setUserPrompt(prompt);
            setShowGenerateImagePage(true);
          }}
        />
      )}
      {showGenerateImagePage && (
        <GenerateImagePage getImage={getImage} />
      )}
    </main>
  );
}

export default App;