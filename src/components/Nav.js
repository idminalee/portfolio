import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMoon, FaBars } from 'react-icons/fa'
import { PRIMARY } from './styles/constants/colours'
import { FONT_16, FONT_SECONDARY } from './styles/constants/typography'
import { displayFlex } from './styles/mixins/flexbox'
import { IconContainer } from './styles/IconStyles'
import Button from './Button'
import { useState } from 'react'

const NavListStyles = styled.ul`
  ${displayFlex('inline-flex')};

  li {
    margin-right: 40px;

    a:not(.btn-link) {
      font-family: ${FONT_SECONDARY};
      font-size: ${FONT_16};
      font-weight: 500;
      color: ${PRIMARY};
      text-transform: uppercase;
    }
  }

  li:last-child {
    margin-right: 0;
  }

  li:not(:last-child) {
    @media screen and (max-width: 768px) {
      display: none !important;
    }
  }

  .sideNav {
    display: none;
    padding-top: 4px;
    margin-right: 12px;

    @media screen and (max-width: 768px) {
      display: inline-block;
    }
  }
`

const SideNavStyles = styled.nav`
  display: none;

  width: 0;
  height: 0;
  background-color: #fff;
  overflow: hidden;
`

const Nav = () => {
  return (
    <>
      <nav>
        <NavListStyles>
          <span className="sideNav">
            <IconContainer>
              <button type="button">
                <FaBars size="26" />
              </button>
            </IconContainer>
          </span>
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
            <Button outline height="34px">
              <a href="/" className="btn-link">
                CV
              </a>
            </Button>
          </li>
          <li>
            <IconContainer>
              <button type="button" style={{ paddingTop: '4px' }}>
                <FaMoon className="dimmed" size="20" />
              </button>
            </IconContainer>
          </li>
        </NavListStyles>
      </nav>

      <SideNavStyles>
        <ul>
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
            <a href="/">CV</a>
          </li>
        </ul>
      </SideNavStyles>
    </>
  )
}

export default Nav
