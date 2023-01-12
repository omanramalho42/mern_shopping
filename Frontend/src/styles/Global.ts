import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    all: unset;
  }

  .text-bold {
    font-weight: bold;
  }

  .side-container {
    min-height: 100vh;
  }

  .btn-primary, .btn-outline-primary {
    background-color: #f0c040;
    color: #000;
  }

  .checkout-steps > div {
    border-bottom: 0.2rem solid #a0a0a0;
    color: #a0a0a0;
  }

  .checkout-steps > div.active {
    border-bottom: 0.2rem solid #f08000;
    color: #f08000;
  }

  .navbar-brand {
    font-weight: bold;
  }

  .side-navbar {
    width: 240px;
    height: 100%;
    position: absolute;
    left: -300px;
    background-color: #100901;
    transition: .5s;
  }

  .side-container {
    transition: .4s;
  }

  .active-cont {
    margin-left: 230px;
  }

  .active-nav {
    left: 0;
  }
`;