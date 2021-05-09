import { useState, createContext, useContext, useCallback } from 'react'
import { ThemeProvider as StyleProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../components/styles/constants/theme'

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
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

  const toggleTheme = useCallback(() => {
    setIsDarkMode(!isDarkMode)
  }, [isDarkMode])

  return [isDarkMode, toggleTheme]
}
