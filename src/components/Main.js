import React from 'react'
import styled, { css } from 'styled-components'
import { useTheme } from '../context/themeContext'
import Projects from './Projects'
import { PRIMARY_LIGHT } from './styles/constants/colours'

const MainStyles = styled.main`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 240px;
  ${(props) =>
    props.isDarkMode &&
    css`
      background-color: ${PRIMARY_LIGHT};
    `}

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 414px) {
    width: 90%;
  }
`

const Main = () => {
  const [isDarkMode] = useTheme()

  return (
    <MainStyles isDarkMode={isDarkMode}>
      <Projects />
    </MainStyles>
  )
}

export default Main
