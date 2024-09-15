import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.cdnfonts.com/css/dosis");
  font-family: "Dosis", sans-serif;

  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #89f7fe, #66a6ff);
    padding: 20px;
  }

  h1 {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 30px;
    text-align: center;
    font-style: italic;
    opacity: 0.8;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  button {
    background-color: #fff;
    border: none;
    border-radius: 20px;
    padding: 20px 30px;
    font-size: 1.2rem;
    color: #333;
    cursor: pointer;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    width: 180px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    line-height: 1.2;
    overflow-wrap: break-word;
    position: relative;
    background-size: cover;
    background-position: center;
  }

  button:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  }

  /* Button specific colors */
  button:nth-child(1) {
    background: #ffe5c2;
    color: #c84ad3;
    font-size: 48px;
    font-weight: 500;
    line-height: 60.67px;
    text-align: center;
  }

  button:nth-child(2) {
    background: #c2f0ff;
    color: #fff;
    background-image: url("../images/g_translae.png"); /* Ensure path is correct */
  }

  button:nth-child(3) {
    background: #e4caff;
    color: #3b5998;
    font-size: 48px;
    font-weight: 500;
    line-height: 60.67px;
    text-align: center;
  }

  button:nth-child(4) {
    background: #ffc2f2;
    color: #c84ad3;
    font-size: 48px;
    font-weight: 500;
    line-height: 60.67px;
    text-align: center;
  }

  /* Responsive design for mobile screens */
  @media (max-width: 768px) {
    button {
      padding: 15px 20px;
      font-size: 1rem;
      width: 120px;
      height: 120px;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1rem;
    }
    button:nth-child(1) {
      background: #ffe5c2;
      color: #c84ad3;
      font-size: 25px;
      font-weight: 500;
      line-height: 60.67px;
      text-align: center;
    }

    button:nth-child(2) {
      background: #c2f0ff;
      color: #fff;
      background-image: url("../images/g_translae.png"); /* Ensure path is correct */
    }

    button:nth-child(3) {
      background: #e4caff;
      color: #3b5998;
      font-size: 28px;
      font-weight: 500;
      line-height: 60.67px;
      text-align: center;
    }

    button:nth-child(4) {
      background: #ffc2f2;
      color: #c84ad3;
      font-size: 28px;
      font-weight: 500;
      line-height: 60.67px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    button {
      padding: 10px 15px;
      font-size: 0.9rem;
      width: 100px;
      height: 100px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 0.9rem;
    }
    button:nth-child(1) {
      background: #ffe5c2;
      color: #c84ad3;
      font-size: 25px;
      font-weight: 500;
      line-height: 60.67px;
      text-align: center;
    }

    button:nth-child(2) {
      background: #c2f0ff;
      color: #fff;
      background-image: url("../images/g_translae.png"); /* Ensure path is correct */
    }

    button:nth-child(3) {
      background: #e4caff;
      color: #3b5998;
      font-size: 28px;
      font-weight: 500;
      line-height: 60.67px;
      text-align: center;
    }

    button:nth-child(4) {
      background: #ffc2f2;
      color: #c84ad3;
      font-size: 28px;
      font-weight: 500;
      line-height: 60.67px;
      text-align: center;
    }
  }
`;

export default Wrapper;
