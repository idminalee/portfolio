import styled from 'styled-components'
import { displayFlex } from './mixins/flexbox'
import * as colour from './constants/colours'
import { FONT_16, FONT_30, FONT_SECONDARY } from './constants/typography'

export const NavListStyles = styled.ul`
  ${displayFlex('inline-flex')};

  li {
    margin-right: 40px;

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }

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

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
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
