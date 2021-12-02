import React from 'react'
import { AppBar, Toolbar, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

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
          <Grid container>
            <Grid item>
              <Typography variant='h1' mb={4}>
                Let's get in contact!
              </Typography>
              <Typography variant='h5'>
                Drop me a line at ant.nagtalon22@gmail.com. Alternatively, you can also find me on LinkedIn.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
