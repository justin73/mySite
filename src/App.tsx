import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Default from './pages/default'
import { lightTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Default />
    </ThemeProvider>
  )
}

export default App
