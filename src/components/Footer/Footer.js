import React from 'react'
import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material'

const Footer = _ => {
  return (
    <AppBar 
      position='static'
      elevation={0}
      color='transparent'
      sx={{ 
        py: 6
      }}
    >
      <Toolbar>
        <Container maxWidth='md'>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h1'>
              Let's get in contact!
            </Typography>
            <Typography variant='h5'>
              Drop me a line at ant.nagtalon22@gmail.com. Alternatively, you can also find me on LinkedIn.
            </Typography>
          </Box>

        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
