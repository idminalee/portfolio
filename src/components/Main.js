import React from 'react'
import styled from 'styled-components'
import Projects from './Projects'
import { displayFlex } from './styles/mixins/flexbox'

const MainStyles = styled.main`
  width: 70%;
  margin: 0 auto;
`

const Main = () => {
  return (
    <MainStyles>
      <Projects />
    </MainStyles>
  )
}

export default Main