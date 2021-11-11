import React from 'react'
import { AppBar, Toolbar, Box, Typography } from '@mui/material'

const Footer = _ => {
  return (
    <AppBar 
      position='static'
      elevation={0}
      color='transparent'
      sx={{ 
        px: 6,
        py: 6
      }}
    >
      <Toolbar>
        <Box>
          <Typography component='h1'>
            Like what you see? Let's get in contact!
          </Typography>
          <Typography component='h3'>
            Drop me a line at ant.nagtalon22@gmail.com. Alternatively, you can also find me on LinkedIn.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
