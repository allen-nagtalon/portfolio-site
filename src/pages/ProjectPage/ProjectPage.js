import React from 'react'
import { Container, Box, Divider } from '@mui/material'

import ProjectDisplay from '../../components/ProjectDisplay'

const ProjectPage = _ => {
  return (
    <Box
      component='div'
      id='projects'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        bgcolor: 'secondary.main'
      }}
    >
      <Container
        maxWidth='md'
      >
        <Divider
          sx={{
            fontSize: '1.2rem',
            fontFamily: 'Roboto'
          }}
        >
          [ Projects ]
        </Divider>
        <Box component='div' py={4}>
          <ProjectDisplay />          
        </Box>  
        <Divider />
      </Container>
    </Box>
  )
}

export default ProjectPage
