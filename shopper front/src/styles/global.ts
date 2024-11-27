import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a{
    text-decoration: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }

  button, a{
   cursor: pointer;
   transition: filter 0.2s;
  }
  button, a{
    filter: brightness(0.9);
  }
`;