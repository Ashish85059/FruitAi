import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/home.js";
import translatorIcon from "../assets/images/g_translate.png"

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="home-container">
        <h1>Fruit.Ai</h1>
        <h2>“Be Healthy!”</h2>
        <div className="button-grid">
          <button onClick={() => navigate("/chatbot")}>Chatbot</button>
          <button
            onClick={() => navigate("/translator")}
            className="translator-button"
          >
            <img
              src={translatorIcon}
              alt="Translator"
              className="button-icon"
            />
          </button>
          <button onClick={() => navigate("/faqs")}>FAQ</button>
          <button onClick={() => navigate("/about")}>About</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
