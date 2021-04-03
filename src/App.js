import React from 'react'
import { IconContext } from 'react-icons'
import GlobalStyles from './components/styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <IconContext.Provider value={{ className: 'icon' }}>
        <h1>Portfolio</h1>
      </IconContext.Provider>
    </>
  )
}

export default App
