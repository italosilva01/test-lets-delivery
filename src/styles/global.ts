import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-white:#f0f2f5;
    --background-black:#202329;
    --blue-light: #6933FF;
    --text-title: #353839;
  }
  
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  } 
  a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color: gray;
  }
   body {
    background: var(--background-white)  no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }
 h2,h3,h4,h5,h6{
    color: var(--text-title)
  }

html{
    @media (max-width:1080px){
        font-size:93.75%;
    }
    @media(max-width:720px){
        font-size:87.5%;
    }
}

  /* #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  } */

  button {
    cursor: pointer;
  }
`;
