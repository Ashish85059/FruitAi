import styled from "styled-components";

const Wrapper = styled.div`
  .translator-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #8ec5fc, #e0c3fc);
    font-family: "Arial", sans-serif;
    padding: 20px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  textarea {
    width: 80%;
    max-width: 600px;
    height: 150px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 2px solid #ddd;
    font-size: 1.1rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    resize: vertical;
    color: #333; /* Set the font color */
    background-color: #f9f9f9; /* Light background for contrast */
    display: block;
    margin: 0 auto; /* Center alignment */
    outline: none;
    transition: all 0.2s ease-in-out;
  }

  textarea:focus {
    border: 2px solid #4caf50;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }

  .language-selection {
    margin-bottom: 20px;
    text-align: center;
  }

  label {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 10px;
  }

  select {
    width: 80%;
    max-width: 600px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 2px solid #ddd;
    background-color: #fff;
    cursor: pointer;
    transition: border-color 0.2s ease-in-out;
  }

  select:focus {
    border-color: #4caf50;
    outline: none;
  }

  button {
    width: 80%;
    max-width: 600px;
    padding: 15px;
    font-size: 1.2rem;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background: #45a049;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  button:focus {
    outline: 3px solid #45a049;
    outline-offset: 2px;
  }

  button:active {
    transform: translateY(-2px);
  }

  .translated-text-container {
    margin-top: 30px;
    padding: 20px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 600px;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #333;
  }

  /* Media Queries for Responsive Design */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    textarea {
      height: 120px;
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      padding: 12px;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    textarea {
      height: 100px;
      font-size: 0.95rem;
    }

    button {
      font-size: 1rem;
      padding: 10px;
    }

    .translated-text-container {
      padding: 15px;
    }

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export default Wrapper;
