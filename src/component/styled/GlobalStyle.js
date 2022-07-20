import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#f3f2ef;
    font-size:14px;
    @media(max-width:1200px){
      font-size:12px;
    }
  }
  hr{
    border-top: 0.6px solid lightgray;
    border-bottom-style:none;
    border-left-style: none;
    border-right-style: none;
    margin:0.3em auto 1em;
  }
  a{
    text-decoration:none;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

  