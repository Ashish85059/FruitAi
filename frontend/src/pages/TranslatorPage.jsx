import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../assets/wrappers/translator";

const TranslatorPage = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("hi"); // Default: Hindi

  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|${targetLang}`
      );
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return (
    <Wrapper>
      <div className="translator-container">
        <h1>Translator Page</h1>
        <textarea
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="language-selection">
          <label>Select target language:</label>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          >
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
        </div>
        <button onClick={translateText}>Translate</button>

        {translatedText && (
          <div className="translated-text-container">
            <h2>Translated Text:</h2>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default TranslatorPage;
