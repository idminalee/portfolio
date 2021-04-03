import React from 'react'
import { IconContext } from 'react-icons'
import Header from './components/Header'
import GlobalStyles from './components/styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Header />
      </IconContext.Provider>
    </>
  )
}

export default App
