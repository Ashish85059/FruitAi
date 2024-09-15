import styled from "styled-components";

const Wrapper = styled.div`
  .faq-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    background: linear-gradient(
      135deg,
      #8ec5fc,
      #e0c3fc
    ); /* Enhanced background gradient */
    font-family: "Arial", sans-serif;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  input {
    width: 80%;
    max-width: 600px;
    padding: 12px;
    margin: 10px 0;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }

  input:focus {
    border-color: #4caf50;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
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
    margin: 10px 0;
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

  .faq-item {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin: 15px 0;
    width: 80%;
    max-width: 600px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  .faq-item h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .faq-item p {
    font-size: 1.1rem;
    color: #555;
  }

  /* Responsive design for mobile screens */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    input {
      font-size: 0.95rem;
    }

    button {
      font-size: 1rem;
      padding: 12px;
    }

    .faq-item h2 {
      font-size: 1.3rem;
    }

    .faq-item p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    input {
      font-size: 0.9rem;
      padding: 10px;
    }

    button {
      font-size: 0.95rem;
      padding: 10px;
    }

    .faq-item {
      padding: 15px;
    }

    .faq-item h2 {
      font-size: 1.2rem;
    }

    .faq-item p {
      font-size: 0.9rem;
    }
  }
`;

export default Wrapper;
 