import React from 'react'
import styled, { css } from 'styled-components'
import { FONT_16, FONT_SECONDARY } from './styles/constants/typography'
import * as colour from './styles/constants/colours'
import { displayFlex } from './styles/mixins/flexbox'

const ButtonStyles = css`
  ${(props) =>
    props.fill &&
    css`
      color: #fff;
      background-color: ${colour.BLUE};

      &:hover {
        background-color: ${colour.BLUE_DARK};
      }
    `}

  ${(props) =>
    props.outline &&
    css`
      color: ${colour.BLUE};
      border: 2px solid ${colour.BLUE};
      background-color: transparent;

      &:hover {
        color: #fff;
        background-color: ${colour.BLUE};
      }
    `}
`

const ButtonHeight = css`
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`

const FullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`

const StyledButton = styled.button`
  ${displayFlex('inline-flex')};
  padding: 0 18px;
  font-family: ${FONT_SECONDARY};
  font-size: ${FONT_16};
  font-weight: 600;
  line-height: 1;
  border-radius: 4px;
  transition: all ease-in-out 300ms;

  /* Fill or Outlined */
  ${ButtonStyles}

  /* Button height */
  ${ButtonHeight}

  /* Button with full width */
  ${FullWidthStyle}
`

const Button = ({ children, fill, outline, height, fullWidth }) => {
  return (
    <StyledButton
      fill={fill}
      outline={outline}
      height={height}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  )
}

export default Button
