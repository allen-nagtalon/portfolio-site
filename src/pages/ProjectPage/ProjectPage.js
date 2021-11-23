import React from 'react'
import { Container, Box } from '@mui/material'

import ProjectDisplay from '../../components/ProjectDisplay'

const ProjectPage = _ => {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        bgcolor: 'secondary.main'
      }}
    >
      <Container>
        <ProjectDisplay />    
      </Container>
    </Box>
  )
}

export default ProjectPage
