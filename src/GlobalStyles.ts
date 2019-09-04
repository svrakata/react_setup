import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: #eee;
    text-decoration: none;
  }

  svg {
    height: 100%;
    width: 100%;
  }


  /* Transition definitions */

  .router-appear,
  .router-enter {
      opacity: 0;
      transform: translateX(-30px);
      z-index: 1;
  }
  .router-appear-active,
  .router-enter.router-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms linear 150ms, transform 300ms linear;
  }

  .router-exit {
      opacity: 1;
  }

  .router-exit.router-exit-active {
      opacity: 0;
      transition: opacity 150ms linear;
  }

  .c-item-enter {
    transform: scale(0.9);
  }

  .c-item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  .c-item-exit {
    opacity: 1;
  }

  .c-item-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

`

export default GlobalStyle
