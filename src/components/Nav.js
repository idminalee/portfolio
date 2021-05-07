import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import * as colour from './styles/constants/colours'
import { FONT_16, FONT_30, FONT_SECONDARY } from './styles/constants/typography'
import { displayFlex } from './styles/mixins/flexbox'
import { IconContainer } from './styles/IconStyles'
import Button from './Button'

const NavStyles = styled.nav`
  ${displayFlex()};
`

const NavListStyles = styled.ul`
  ${displayFlex('inline-flex')};

  li {
    margin-right: 40px;

    a:not(.btn-link) {
      font-family: ${FONT_SECONDARY};
      font-size: ${FONT_16};
      font-weight: 500;
      color: ${colour.PRIMARY};
      text-transform: uppercase;

      @media screen and (max-width: 768px) {
        font-size: ${FONT_30};
        font-weight: 700;
        color: ${colour.BLUE};

        &:hover {
          color: ${colour.BLUE_DARK};
        }
      }
    }
  }

  li:last-child {
    margin-right: 24px;
  }

  li:not(:last-child) {
    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
  }

  .btn-link {
    @media screen and (max-width: 768px) {
      padding: 0 28px;
      font-size: 28px;
    }
  }

  &.open {
    ${displayFlex()};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: unset;
    background-color: ${colour.BACKGROUND};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 0;
    height: 0;
    overflow: hidden;
    background-color: #fff;
    transition: height 0.3s ease-out;
  }
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
  const [clicked, setClicked] = useState(false)

  return (
    <NavStyles>
      <MenuButton
        onClick={() => setClicked(!clicked)}
        className={clicked ? 'active' : ''}
      >
        <IconContainer>
          <button type="button">
            {clicked ? <FaTimes size="30" /> : <FaBars size="26" />}
          </button>
        </IconContainer>
      </MenuButton>
      <NavListStyles
        onClick={() => setClicked(!clicked)}
        className={clicked ? 'open' : ''}
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
          <Button outline height={clicked ? '48px' : '34px'}>
            <a href="/" className="btn-link">
              CV
            </a>
          </Button>
        </li>
      </NavListStyles>
      <IconContainer>
        <button type="button" style={{ paddingTop: '4px' }}>
          <FaMoon className="dimmed" size="22" />
        </button>
      </IconContainer>
    </NavStyles>
  )
}

export default Nav
