import { useState } from 'react'

import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import Resume from '../../assets/resume.pdf'

export default function DrawerMenu () {
  const [open, setOpen] = useState(false)

  const links = [
    {
      text: 'about',
      link: '#about'
    },
    {
      text: 'projects',
      link: '#projects'
    },
    {
      text: 'resume'
    },
    {
      text: 'linkedin',
      link: 'https://www.linkedin.com/in/aanagtalon/'
    },
    {
      text: 'github',
      link: 'https://github.com/anthony-nagtalon'
    }
  ]

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen(open);
  }

  return (
    <Box>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer 
        open={open}
        anchor='right'
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            p: 3,
            role: 'presentation',
            bgcolor: 'primary.main'
          }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {links.map((object) => (
              <ListItem button component='a' href={ object.link ? object.link : Resume } key={object.text}>
                <ListItemButton>
                  <ListItemText 
                    disableTypography
                    primary={
                      <Typography 
                        align='center'
                        variant='h3' 
                        sx={{ 
                          color: 'white.main',
                          '&:hover': {
                            color: 'secondary.main'
                          }
                        }}
                      >
                        {object.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              ))
            }
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

