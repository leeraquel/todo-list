import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

  /* * {
    font-family: 'Ownglyph_meetme-Rg',-apple-system, sans-serif;} */

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
    width: 100%;
    font-size: 1rem;
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
    width: 88px;
    text-align: center;
  }

  button:hover {
    background-color: #ffafbc;
  }

  ul {
    list-style-type: none;
    padding: 0;
    width: 500px;
  }

  li {
    padding: 8px;
    margin-top: 5px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin-top: 5px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }


`;

export default GlobalStyle;
