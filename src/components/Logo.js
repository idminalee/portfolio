import React from 'react'
import styled from 'styled-components'
import { BLUE } from './styles/constants/colours'
import { FONT_30 } from './styles/constants/typography'

const LogoStyles = styled.h1`
  font-size: ${FONT_30};
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${BLUE};
`

const Logo = ({ children }) => {
  return <LogoStyles>{children}</LogoStyles>
}

export default Logo
