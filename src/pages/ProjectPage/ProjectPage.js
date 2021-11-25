import React from 'react'
import { Container, Box } from '@mui/material'

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
        <ProjectDisplay />    
      </Container>
    </Box>
  )
}

export default ProjectPage
