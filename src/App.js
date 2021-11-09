import { ThemeProvider, CssBaseline } from '@mui/material'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'

const App = _ => {
  return(
    <div>
      <NavBar />
      <LandingPage />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default App
