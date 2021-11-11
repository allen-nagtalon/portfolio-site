import React from 'react'
import { AppBar, Toolbar, Box, Link, IconButton } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const NavBar = _ => {
  return (
    <AppBar 
      position='fixed'
      elevation={0}
      color='transparent'
      sx={{ 
        px: 6,
        py: 2
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1
          }}
        >
          <Link 
            href='/'
            underline='none'
          >
            allen.
          </Link>
        </Box>

        <Box
          sx={{
            mx: 8
          }}
        >
          <Link 
            href='/about'
            underline='none'
            sx={{ mx: 2 }}
          >
            about me
          </Link>

          <Link 
            href='/projects'
            underline='none'
            sx={{ mx: 2 }}
          >
            projects
          </Link>
        </Box>

        <IconButton>
          <LinkedInIcon />
        </IconButton>

        <IconButton>
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
