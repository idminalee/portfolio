import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { displayFlex } from './styles/mixins/flexbox'
import { IconContainer } from './styles/IconStyles'
import { NavListStyles } from './styles/NavListStyles'
import Button from './Button'
import { useTheme } from '../context/themeContext'

const NavStyles = styled.nav`
  ${displayFlex()};
`

const MenuButton = styled.span`
  display: none;
  padding-top: 4px;
  margin-right: 12px;

  @media screen and (max-width: 768px) {
    display: inline-block;
    z-index: 100;

    &.active {
      position: absolute;
      top: 28px;
      right: 54px;
    }
  }
`

const Nav = () => {
  const [, toggleTheme] = useTheme()
  const [clicked, setClicked] = useState(false)
  const viewportWidth = window.innerWidth < 768

  return (
    <NavStyles>
      <MenuButton
        onClick={() => setClicked(!clicked)}
        className={viewportWidth && clicked ? 'active' : ''}
      >
        <IconContainer>
          <button type="button">
            {clicked ? <FaTimes size="30" /> : <FaBars size="26" />}
          </button>
        </IconContainer>
      </MenuButton>
      <NavListStyles
        onClick={() => setClicked(!clicked)}
        className={viewportWidth && clicked ? 'open' : ''}
      >
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Button outline height={viewportWidth && clicked ? '48px' : '34px'}>
            <a href="/" className="btn-link">
              CV
            </a>
          </Button>
        </li>
      </NavListStyles>
      <IconContainer onClick={toggleTheme}>
        <button type="button" style={{ paddingTop: '4px' }}>
          <FaMoon className="dimmed" size="22" />
        </button>
      </IconContainer>
    </NavStyles>
  )
}

export default Nav
