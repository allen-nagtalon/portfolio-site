import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'

const App = _ => {
  return(
    <BrowserRouter>  
      <NavBar />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
