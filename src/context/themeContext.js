import { useState, createContext, useContext } from 'react'
import { ThemeProvider as StyleProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../components/styles/constants/theme'

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const localTheme = window.localStorage.getItem('isDarkMode' || 'false')
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localTheme))
  const themeObject = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <StyleProvider theme={themeObject}>{children}</StyleProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  const { isDarkMode, setIsDarkMode } = context

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false)
      window.localStorage.setItem('isDarkMode', 'false')
    } else {
      setIsDarkMode(true)
      window.localStorage.setItem('isDarkMode', 'true')
    }
  }

  return [isDarkMode, toggleTheme]
}
