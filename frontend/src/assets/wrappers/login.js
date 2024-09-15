import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;

  .login-container {
    background-color: white;
    width: 350px;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 12px;
    color: #888;
    text-align: center;
    margin-bottom: 20px;

    a {
      color: #007bff;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;

    button {
      background: none;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 16px;
      border-bottom: 2px solid transparent;
      margin: 0 10px;
    }

    .active {
      border-bottom: 2px solid #007bff;
      color: #007bff;
    }
  }

  form {
    width: 100%;

    input {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      display: flex;
      align-items: center;
    }

    .password-field {
      display: flex;
      align-items: center;
      position: relative;

      input {
        padding-right: 40px;
      }

      .eye-icon {
        position: absolute;
        right: 10px;
        cursor: pointer;
        color: #888;
      }
    }

    .remember-forgot {
      display: flex;
      justify-content: space-between;
      align-items: center; /* Ensure everything is aligned in the center */
      font-size: 12px;
      color: #888;
      margin-bottom: 20px;

      label {
        display: flex; /* Keep checkbox and label on the same line */
        align-items: center; /* Vertically center the checkbox with the label */
        cursor: pointer;

        input {
          margin-right: 5px; /* Space between checkbox and label text */
        }
      }

      a {
        color: #007bff;
        text-decoration: none;
        cursor: pointer;
      }
    }

    button {
      width: 100%;
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  }

  .social-media {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;

    .icon {
      font-size: 20px;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .icon.facebook {
      color: #3b5998; /* Facebook Blue */
    }

    .icon.instagram {
      color: #e4405f; /* Instagram Pink */
    }

    .icon.pinterest {
      color: #bd081c; /* Pinterest Red */
    }

    .icon.linkedin {
      color: #0e76a8; /* LinkedIn Blue */
    }
  }

  .fingerprint {
    margin-top: 20px;
    color: #007bff;
    font-size: 40px;
    cursor: pointer;
  }
`;

export default Wrapper;
