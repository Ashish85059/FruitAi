import styled from "styled-components";

const Wrapper = styled.div`
  .faq-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 30px;
    background: #f7f9fb;
    font-family: "Dosis", sans-serif;
  }

  h1 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 20px;
  }

  .faq-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin-bottom: 40px;
  }

  input,
  textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  textarea {
    min-height: 100px;
  }

  button {
    padding: 12px 20px;
    font-size: 1.2rem;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color: #218838;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .faq-item {
    width: 100%;
    max-width: 600px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .faq-item h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .faq-item p {
    font-size: 1.2rem;
    color: #666;
  }

  .faq-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .edit-btn,
  .delete-btn {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .edit-btn {
    background-color: #007bff;
    color: white;
    margin-right: 10px;
  }

  .edit-btn:hover {
    background-color: #0056b3;
  }

  .delete-btn {
    background-color: #dc3545;
    color: white;
  }

  .delete-btn:hover {
    background-color: #c82333;
  }

  /* Edit Mode Styling */
  .edit-mode {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .edit-mode input,
  .edit-mode textarea {
    width: 90%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #ddd;
  }

  .edit-mode button {
    width: auto;
    padding: 10px 20px;
    margin-top: 10px;
    align-self: flex-end;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    input,
    textarea {
      font-size: 1rem;
      padding: 10px;
    }

    button {
      font-size: 1rem;
      padding: 10px 15px;
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

    input,
    textarea {
      font-size: 0.9rem;
      padding: 8px;
    }

    button {
      font-size: 0.9rem;
      padding: 8px 10px;
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
