import React from 'react'
import { AppBar, Toolbar, Box, Link, Typography, IconButton } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const NavBar = _ => {
  return (
    <AppBar 
      position='fixed'
      elevation={0}
      color='transparent'
      sx={{ 
        px: 24,
        py: 4
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            px: 4
          }}
        >
          <Link 
            href='/'
            underline='none'
            variant='mainlogo'
          >
            allen
          </Link>
        </Box>

        <Box
          sx={{
            mx: 8,
            mt: 1
          }}
        >
          <Link 
            href='/about'
            underline='none'
            variant='navlink'
            sx={{ mx: 2 }}
          >
            about me
          </Link>

          <Link 
            href='/projects'
            underline='none'
            variant='navlink'
            sx={{ mx: 2 }}
          >
            projects
          </Link>

          <Link 
            href='/resume'
            underline='none'
            variant='navlink'
            sx={{ mx: 2 }}
          >
            resume
          </Link>
        </Box>

        <Box
          sx={{
            mx: 8,
            mt: 1
          }}
        >
          <IconButton>
            <LinkedInIcon />
          </IconButton>

          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
