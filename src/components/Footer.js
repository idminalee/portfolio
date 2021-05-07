import React from 'react'
import styled from 'styled-components'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BACKGROUND, SECONDARY } from './styles/constants/colours'
import { FONT_12, FONT_SECONDARY } from './styles/constants/typography'
import { IconContainer } from './styles/IconStyles'
import { displayFlex } from './styles/mixins/flexbox'

const currentYear = new Date().getFullYear()

const FooterStyles = styled.footer`
  ${displayFlex('flex', 'space-evenly', 'center')};
  flex-direction: column;
  width: 100%;
  height: 200px;
  text-align: center;
  background-color: ${BACKGROUND};

  .social-link:not(:last-child) {
    margin-right: 16px;
  }

  small {
    font-family: ${FONT_SECONDARY};
    font-size: ${FONT_12};
    font-weight: 500;
    line-height: 1.5;
    color: ${SECONDARY};
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <IconContainer className="social-link">
          <a
            href="https://www.linkedin.com/in/mina-lee-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="The link to Mina Lee's Linked In page"
          >
            <FaLinkedinIn size="32" />
          </a>
        </IconContainer>
        <IconContainer className="social-link">
          <a
            href="https://github.com/idminalee"
            target="_blank"
            rel="noreferrer"
            aria-label="The link to Mina Lee's Github page"
          >
            <FaGithub size="32" />
          </a>
        </IconContainer>
      </div>

      <small>
        &copy; {currentYear} Mina Lee <br />
        All rights reserved.
      </small>
    </FooterStyles>
  )
}

export default Footer
