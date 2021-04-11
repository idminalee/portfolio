import React from 'react'
import { IconContext } from 'react-icons'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import GlobalStyles from './components/styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Header />
        <Hero />
        <Main />
      </IconContext.Provider>
    </>
  )
}

export default App
