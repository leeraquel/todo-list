import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  /* * {
    font-family: 'Ownglyph_meetme-Rg',-apple-system, sans-serif;} */

    body, input, button {
    font-family: 'Ownglyph_meetme-Rg', -apple-system, sans-serif;
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
    width: 90%;
    max-width: 500px;
  }

  input:focus {
    outline: solid 1px pink;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }

  ul {
    list-style-type: none;
    padding: 0;
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
    width: 300px;
  }


`;

export default GlobalStyle;
