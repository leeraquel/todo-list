import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
  }

  body, input, button {
  font-family: 'S-CoreDream-3Light', -apple-system, sans-serif;
    margin: 0;
    padding: 0;
  }

  input[type="text"] {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    display: block;
    flex-grow: 1;
    font-size: 1rem;
    flex-grow: 1;
  }

  input:focus {
    outline: solid 1px pink;
  }

  button {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 85px;
    text-align: center;
  }

  button:hover {
    background-color: #ffafbc;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    width: 100%;
    text-align: left;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
    border-radius: 4px;
    width: 500px;
    padding: 8px;
  }


`;

export default GlobalStyle;
