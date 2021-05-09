import React from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as colour from './styles/constants/colours'
import * as font from './styles/constants/typography'
import { displayFlex } from './styles/mixins/flexbox'

AOS.init({
  duration: 500,
  easing: 'ease-in-out',
})

const AboutWrapper = styled.div`
  width: 100%;
  padding-bottom: 180px;
  background-color: ${(props) => props.theme.bgColour};
`

const AboutStyles = styled.section`
  max-width: 70%;
  height: 100%;
  padding-top: 200px;
  margin: 0 auto;

  h2 {
    margin-bottom: 28px;
    font-size: ${font.FONT_36};
    font-weight: 400;
    line-height: 1.35;
  }

  p {
    margin-bottom: 64px;
    font-family: ${font.FONT_SECONDARY};
    font-size: ${font.FONT_20};
    font-weight: 300;
    line-height: 1.5;
  }
`

const TechWrapper = styled.div`
  ${displayFlex('flex', 'center', 'flex-start')};
  flex-wrap: wrap;
  font-family: ${font.FONT_SECONDARY};
`

const TechList = styled.div`
  min-width: 260px;
  flex-basis: 50%;
  flex-grow: 1;
  margin-bottom: 40px;

  h3 {
    margin-bottom: 8px;
    font-size: ${font.FONT_20};
    font-weight: 600;
    line-height: 1.3;
    color: ${colour.BLUE};
  }

  li {
    font-size: ${font.FONT_18};
    font-weight: 300;
    line-height: 1.8;
    text-indent: 4px;
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <AboutStyles>
        <h2 data-aos="fade-up" data-aos-offset="100">
          Who is Mina?
        </h2>
        <p data-aos="fade-up" data-aos-offset="100">
          I am a self-taught front-end web developer Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Repellendus quasi magni est maiores
          temporibus quis, officiis, quaerat esse natus ipsam provident odit
          nisi explicabo neque modi expedita ex corrupti obcaecati!
        </p>

        <TechWrapper
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-offset="100"
        >
          <TechList>
            <h3>Languages & Tools</h3>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>HTML & CSS3(SCSS)</li>
              <li>Git & Github</li>
              <li>Styled-components</li>
            </ul>
          </TechList>
          <TechList>
            <h3>Had fun with</h3>
            <ul>
              <li>Firebase</li>
            </ul>
          </TechList>
          <TechList>
            <h3>Currently learning</h3>
            <ul>
              <li>TypeScript</li>
              <li>Next.js</li>
            </ul>
          </TechList>
          <TechList>
            <h3>Looking forward to learning</h3>
            <ul>
              <li>Node.js</li>
              <li>GraphQL</li>
            </ul>
          </TechList>
        </TechWrapper>
      </AboutStyles>
    </AboutWrapper>
  )
}

export default About
