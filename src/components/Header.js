import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'
import { displayFlex } from './styles/mixins/flexbox'

const HeaderStyles = styled.header`
  ${displayFlex('flex', 'space-between')}
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 90px;
  padding: 0 56px;
  background-color: ${(props) => props.theme.bgColour};
  z-index: 10;
  ${(props) =>
    props.scroll &&
    css`
      box-shadow: 0px 3px 16px 0px rgb(0, 0, 0, 0.03);
    `}
`

const Header = () => {
  const [scroll, setScroll] = useState(false)

  const setShadow = () => {
    window.scrollY > 80 ? setScroll(true) : setScroll(false)
  }

  window.addEventListener('scroll', setShadow)

  return (
    <HeaderStyles scroll={scroll}>
      <Logo>
        <Link to="/">min-a</Link>
      </Logo>
      <Nav />
    </HeaderStyles>
  )
}

export default Header
