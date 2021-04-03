import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'
import * as colour from './styles/constants/colours'
import { displayFlex } from './styles/mixins/flexbox'

const HeaderStyles = styled.header`
  ${displayFlex('flex', 'space-between')}
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 110px;
  padding: 0 56px;
  background-color: ${colour.BACKGROUND};
`

const Header = () => {
  return (
    <HeaderStyles>
      <Logo>min-a</Logo>
      <Nav />
    </HeaderStyles>
  )
}

export default Header
