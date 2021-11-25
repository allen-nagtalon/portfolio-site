import React from 'react'
import { AppBar, Toolbar, Box, Link, Container, IconButton } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Resume from '../../assets/resume.pdf'

const NavBar = _ => {
  return (
    <AppBar 
      position='fixed'
      elevation={0}
      color='transparent'
      sx={{ py: 4 }}
    >
      <Container maxWidth='lg'>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              px: 4
            }}
          >
            <Link 
              href='#landing'
              underline='none'
              variant='mainlogo'
            >
              allen
            </Link>
          </Box>

          <Box
            ml={8}
            mt={1}
          >
            <Link 
              href='#about'
              underline='none'
              variant='navlink'
              sx={{ 
                mx: 2,
                '&:hover': {
                  fontWeight: 'bolder'
                }
              }}
            >
              about
            </Link>

            <Link 
              href='#projects'
              underline='none'
              variant='navlink'
              sx={{ 
                mx: 2,
                '&:hover': {
                  fontWeight: 'bolder'
                }
              }}
            >
              projects
            </Link>

            <Link 
              href={Resume}
              underline='none'
              variant='navlink'
              sx={{ 
                mx: 2,
                '&:hover': {
                  fontWeight: 'bolder'
                } 
              }}
            >
              resume
            </Link>
          </Box>

          <Box
            sx={{
              ml: 8,
              mt: 1
            }}
          >
            <IconButton
              href='https://www.linkedin.com/in/aanagtalon/'
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href='https://github.com/anthony-nagtalon'
              sx={{ ml: 1 }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
