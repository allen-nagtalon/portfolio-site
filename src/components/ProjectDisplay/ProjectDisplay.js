import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Paper, Box, Typography, Button, Divider, CardContent, CardMedia, CardActions } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

import useWindowDimensions from '../useWindowDimensions/useWindowDimensions'

import TriadTracker from '../../assets/triadtracker1.jpg'
import SudokuSolver from '../../assets/sudokusolver1.jpg'
import Wishmaker from '../../assets/wishmaker1.jpg'

const ProjectDisplay = _ => {
  const { width } = useWindowDimensions()

  var projects = [
    {
      title: 'Triad Tracker',
      desc: 'A web application tool for the game "Final Fantasy XIV". Utilizes a React-based Front-End with a Django-based RESTful API Back-End.',
      github: 'https://github.com/anthony-nagtalon/triadtracker',
      link: 'https://triad-tracker-app.herokuapp.com/',
      tech: [ 'Python', 'HTML/CSS', 'Javascript', 'Django', 'React', 'Material-UI', 'VSCode'],
      image: TriadTracker
    },
    {
      title: 'Sudoku Solver',
      desc: 'A simple Android Mobile Application to read Sudoku puzzles using AR. Puzzles can then be solved or played out via the app.',
      github: 'https://github.com/anthony-nagtalon/SudokuWizardApp',
      tech: [ 'Java', 'Kotlin', 'Android Studio', 'CameraX API', 'Google MLK', 'Figma' ],
      image: SudokuSolver
    },
    {
      title: 'Wishmaker',
      soon: '[ Coming soon! ]',
      desc: 'A web application tool for users to compile wishlists for any given event. Users can create and follow events, and connect their wishlist to said events for friends and family to view.',
      image: Wishmaker
    }
  ]

  return (
    <Carousel
      animation='slide'
      duration={750}
      navButtonsAlwaysInvisible="false"
    >
      { projects.map( (project, i) => <VerticalProject key={i} project={project} /> ) }
    </Carousel>
  )
}

const VerticalProject = props => {
  return (
    <Box sx={{ px: 2, py: 2 }}>
      <Paper elevation={8} p={2}>
        <Grid 
          container 
          spacing={0}
        >
          <Grid 
            item 
            xs={12}
            md={6}
            sx={{ 
              height: '50vh'
            }}
          > 
            <CardContent>
              <Box 
                sx={{
                  p: 2
                }}
              >
                <Typography variant='h3' mb={3}>
                  { props.project.title }
                  { 
                    props.project.soon
                    ? <Typography variant='h6' color='primary.light'>
                        { props.project.soon }
                      </Typography>
                    : null
                  }
                </Typography>
                <Typography variant='h6' my={2}>
                  { props.project.desc }
                </Typography>
                <Divider variant='middle'/>
                {
                  props.project.tech
                  ? <Typography variant='h6' color='secondary.main' mt={2} mb={3}>
                      { props.project.tech.join(' • ') }
                    </Typography>
                  : null
                }
                <Divider variant='middle' />
              </Box>
              
              <CardActions
                sx={{
                  px: 2
                }}
              >
                { 
                  props.project.github
                  ? <Button href={ props.project.github }>
                      <GitHubIcon />
                    </Button>
                  : null
                }
                { 
                  props.project.link
                  ? <Button href={ props.project.link }>
                      <LinkIcon />
                    </Button>
                  : null
                }
              </CardActions>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component='img'
              image={ props.project.image }
              sx={{
                height: '100%'
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

const HorizontalProject = props => {
  return (
    <Box sx={{ px: 8, py: 2 }}>
      <Paper elevation={8} p={2}>

      </Paper>
    </Box>
  )
}

export default ProjectDisplay
