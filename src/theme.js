import { createTheme, responsiveFontSizes } from '@mui/material'

const primary = '#000000'
const secondary = '#F6A192'
const white = '#FFFFFF'

let theme = createTheme({
  palette: {
    primary: { 
      main: primary 
    },
    secondary: { 
      main: secondary 
    },
    white: {
      main: white
    }
  },
  typography: {
    fontFamily: [
      'Playfair Display',
      'Roboto'
    ].join(','),
    h1: {
      fontFamily: 'Roboto',
      fontSize: '1.8rem',
      fontWeight: 'bolder'
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '1.8rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: '1.2rem'
    },
    mainlogo: {
      fontFamily: 'Playfair Display',
      fontSize: '1.8rem',
    },
    navlink: {
      fontFamily: 'Roboto',
      fontSize: '1.2rem',
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
