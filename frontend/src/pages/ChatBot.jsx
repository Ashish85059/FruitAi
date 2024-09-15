// src/components/Chatbot.js
import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/chatbot"; // Ensure this file has the required CSS

// Import images directly if they are in the src folder
import appleImage from "../assets/images/apple.png";
import bananaImage from "../assets/images/banana.png";
import orangeImage from "../assets/images/orange.jpg";

const fruitImages = {
  Apple: appleImage, // Use imported image paths
  Banana: bananaImage,
  Orange: orangeImage,
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "How can I help you today?", type: "bot" }, // Default message
  ]);
  const [input, setInput] = useState("");
  const [fruits, setFruits] = useState([]);

  // Load fruit data from JSON file
  useEffect(() => {
    fetch("/fruits.json")
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error("Error fetching fruit data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = input;
    setMessages([...messages, { text: userMessage, type: "user" }]);
    setInput("");

    
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: userMessage, type: "user" },
        { text: botResponse, type: "bot" },
      ]);
    }, 500); // Simulate typing delay
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    // Improved partial matching
    const fruit = fruits.find((fruit) => {
      const fruitName = fruit.name.toLowerCase();
      return fruitName.includes(lowerCaseMessage);
    });

    if (fruit) {
      return fruit.description;
    }

    if (lowerCaseMessage.includes("fruit")) {
      return "Here is a list of fruits you can choose from: Apple, Banana, Orange.";
    }

    return "You can only ask about fruits.";
  };

  const handleFruitClick = (fruitName) => {
    const fruit = fruits.find((f) => f.name === fruitName);
    setMessages([
      ...messages,
      { text: `I want to know about ${fruitName}`, type: "user" },
      {
        text: fruit ? fruit.description : "No description available.",
        type: "bot",
      },
    ]);
  };

  const handleReset = () => {
    setMessages([
      { text: "Chat reset. How can I assist you today?", type: "bot" },
    ]);
    setInput("");
  };

  return (
    <Wrapper>
      <div className="chatbot">
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chatbot-message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="fruit-icons">
          {Object.keys(fruitImages).map((fruitName) => (
            <button
              key={fruitName}
              className="fruit-icon"
              onClick={() => handleFruitClick(fruitName)}
            >
              <img
                src={fruitImages[fruitName]}
                alt={fruitName}
                className="fruit-image"
              />
            </button>
          ))}
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        </div>
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a fruit..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Chatbot;
