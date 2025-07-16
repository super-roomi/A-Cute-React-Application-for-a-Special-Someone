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
