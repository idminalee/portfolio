import styled from 'styled-components'
import * as font from './constants/typography'
import * as colour from './constants/colours'
import { displayFlex } from './mixins/flexbox'

export const FormStyles = styled.form`
  ${displayFlex('flex', 'flex-start', 'flex-start')};
  flex-direction: column;

  font-family: ${font.FONT_SECONDARY};

  label {
    display: block;
    margin-bottom: 12px;
    font-size: ${font.FONT_20};
    font-weight: 500;
    color: ${colour.BLUE};
  }

  input {
    width: 100%;
    margin-bottom: 32px;
    font-size: ${font.FONT_24};
    font-weight: 300;
    line-height: 1.5;
    color: ${colour.PRIMARY};
    border-bottom: 2px solid ${colour.BLUE};
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px ${colour.BACKGROUND} inset !important;
      -webkit-box-shadow: 0 0 0 30px ${colour.BACKGROUND} inset !important;
    }

    &::-webkit-input-placeholder {
      color: ${colour.SECONDARY};
    }
  }

  textarea {
    width: 100%;
    height: 300px;
    padding: 8px 10px;
    margin-bottom: 32px;
    font-size: ${font.FONT_24};
    font-weight: 300;
    color: ${colour.PRIMARY};
    border: 2px solid ${colour.BLUE};
    border-radius: 4px;
    transition: background-color 300ms ease-in-out;
    resize: none;

    &::-webkit-input-placeholder {
      color: ${colour.SECONDARY};
    }

    &:focus {
      background-color: #fff;
    }
  }

  button {
    font-size: ${font.FONT_18};
  }
`
