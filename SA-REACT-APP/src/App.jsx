import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import MainContent from './MainContent'
import { ThemeProvider } from './ThemeContext.jsx'

function App() {

  return (
    <>
      <ThemeProvider>
        <Nav />
        <MainContent />
      </ThemeProvider>
    </>
  )
}

export default App
