import React from 'react'
import styled, { css } from 'styled-components'
import { useTheme } from '../context/themeContext'
import Projects from './Projects'
import { PRIMARY_LIGHT } from './styles/constants/colours'

const MainStyles = styled.main`
  width: 70%;
  margin: 0 auto;
  ${(props) =>
    props.isDarkMode &&
    css`
      background-color: ${PRIMARY_LIGHT};
    `}
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
