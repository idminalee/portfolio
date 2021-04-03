import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { PRIMARY } from './styles/constants/colours'
import { FONT_16, FONT_SECONDARY } from './styles/constants/typography'
import { displayFlex } from './styles/mixins/flexbox'
import { IconContainer } from './styles/IconStyles'
import Button from './Button'

const NavListStyles = styled.ul`
  ${displayFlex()};

  li {
    margin-right: 40px;

    a:not(.btn-link) {
      font-family: ${FONT_SECONDARY};
      font-size: ${FONT_16};
      font-weight: 600;
      color: ${PRIMARY};
      text-transform: uppercase;
    }
  }

  li:last-child {
    margin-right: 0;
  }
`

const Nav = () => {
  return (
    <nav>
      <NavListStyles>
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
            <button type="button">
              <FaMoon className="dimmed" size="20" />
            </button>
          </IconContainer>
        </li>
      </NavListStyles>
    </nav>
  )
}

export default Nav
