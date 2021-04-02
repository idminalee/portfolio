import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { FONT_PRIMARY } from './constants/typography'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${FONT_PRIMARY};
    line-height: 1;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
  }

  button,
  input,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
`

export default GlobalStyles
