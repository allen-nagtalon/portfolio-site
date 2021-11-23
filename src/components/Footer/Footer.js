import React from 'react'
import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material'

const Footer = _ => {
  return (
    <AppBar 
      position='static'
      elevation={0}
      sx={{ 
        py: 30
      }}
    >
      <Toolbar>
        <Container maxWidth='md'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Box sx={{ flexGrow: 2 }}>
              <Typography variant='h1' mb={2}>
                Let's get in contact!
              </Typography>
              <Typography variant='h5'>
                Drop me a line at ant.nagtalon22@gmail.com. Alternatively, you can also find me on LinkedIn.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
