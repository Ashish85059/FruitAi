import styled from "styled-components";

const Wrapper = styled.div`
  /* src/assets/wrappers/chatbot.css */
  .chatbot {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #f9f9f9;
    margin: auto;
  }

  .chatbot-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    background: #fff;
  }

  .chatbot-message {
    margin: 5px 0;
    padding: 10px;
    border-radius: 4px;
  }

  .chatbot-message.user {
    background: #d1e7dd;
    align-self: flex-end;
  }

  .chatbot-message.bot {
    background: #f8d7da;
    align-self: flex-start;
  }

  .chatbot-input {
    display: flex;
    padding: 10px;
    background: #eee;
  }

  .chatbot-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .chatbot-input button {
    margin-left: 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
  }

  /* src/assets/wrappers/chatbot.css */

  .fruit-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .fruit-icon {
    border: none;
    background: transparent;
    cursor: pointer;
    margin: 5px;
  }

  .fruit-image {
    width: 50px;
    height: 50px;
  }

  .chatbot-message.user {
    text-align: right;
  }

  .chatbot-message.bot {
    text-align: left;
  }

  .back-button,
  .reset-button {
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
  }

  .reset-button {
    background: #dc3545; /* Red for reset */
  }
`;

export default Wrapper;
