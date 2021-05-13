import React from 'react'
import styled, { keyframes } from 'styled-components'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import * as colour from './styles/constants/colours'
import { FONT_16, FONT_36 } from './styles/constants/typography'
import { displayFlex } from './styles/mixins/flexbox'

const pulse = keyframes`
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(0);
  }
`

const HeroWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
  background-color: ${(props) => props.theme.bgColour};
`

const HeroStyles = styled.section`
  height: 90vh;
  max-width: 70%;
  margin: 0 auto;
  margin-top: 80px;
  background-color: ${(props) => props.theme.bgColour};

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }

  .spacer {
    height: 20vh;
    background-color: ${(props) => props.theme.bgColour};
  }

  h2 {
    margin-bottom: 28px;
    font-size: ${FONT_36};
    font-weight: 400;
    line-height: 1.35;

    strong {
      font-weight: 700;
      color: ${colour.BLUE};
    }
  }
  p {
    margin-bottom: 24vh;
    font-size: ${FONT_16};
    font-weight: 400;
    line-height: 1.8;
  }

  .to-projects {
    ${displayFlex()};
    svg.icon {
      color: ${colour.BLUE};
      animation: ${pulse} 600ms alternate infinite;
    }
  }
`

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroStyles>
        <div className="spacer" aria-hidden="true"></div>
        <h2 data-aos="fade-up" data-aos-offset="100">
          Hi, I'm Mina.
          <br /> A <strong>frontend developer</strong> based in London.
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" data-aos-offset="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          officiis quasi fugit? Officiis voluptatibus nihil necessitatibus
          eligendi illum culpa repellat nulla, ea aperiam accusantium adipisci,
          magnam harum corrupti quas fugit!
        </p>
        <div className="to-projects">
          <HiOutlineChevronDoubleDown size="24" />
        </div>
      </HeroStyles>
    </HeroWrapper>
  )
}

export default Hero
