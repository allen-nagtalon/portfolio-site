import { ThemeProvider, CssBaseline } from '@mui/material'

import { NavBar } from './components/NavBar'
import { Footer } from './components/NavBar'

import { LandingPage } from './pages/LandingPage'
import { AboutPage } from './pages/AboutPage'

const App = _ => {
  return(
    <ThemeProvider>
      <CssBaseline />
      <div>
        <NavBar />
        <LandingPage />
        <AboutPage />
        <Footer />
      </div>
    </ThemeProvider>
  )
}