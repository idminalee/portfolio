import React from 'react'
import { Route } from 'react-router-dom'
import { IconContext } from 'react-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from './context/themeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'
import GlobalStyles from './components/styles/GlobalStyles'
import Contact from './components/Contact'
import About from './components/About'

AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  once: true,
})

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Header />
        <Route path="/" exact>
          <Hero />
          <Main />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Footer />
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
