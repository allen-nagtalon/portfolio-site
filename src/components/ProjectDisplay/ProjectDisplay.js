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
      { projects.map( (project, i) => <Project key={i} project={project} /> ) }
    </Carousel>
  )
}

const Project = props => {
  const { width } = useWindowDimensions()

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={8}>
        <Grid 
          container 
          spacing={0}
          sx={{
            height: '50vh'
          }}
        >
          <Grid 
            item 
            xs={12}
            sm={6}
            sx={{
              height: '25vh'
            }}
          > 
            <CardContent>
              <Box 
                sx={{
                  pt: (width < 600) ? 1 : 5,
                  px: (width < 600) ? 0 : 3
                }}
              >
                <Typography 
                  variant='h3'
                  mb={1}
                >
                  { props.project.title }
                  { 
                    props.project.soon
                    ? <Typography variant='h6' color='primary.light'>
                        { props.project.soon }
                      </Typography>
                    : null
                  }
                </Typography>
                <Typography variant='h6' mb={2}>
                  { props.project.desc }
                </Typography>
                
                {
                  props.project.tech && (width > 600)
                  ? <>
                      <Divider variant='middle'/>
                      <Typography variant='h6' color='secondary.main' mt={2} mb={3}>
                        { props.project.tech.join(' • ') }
                      </Typography>
                      <Divider variant='middle' />
                    </>
                  : null
                }
              </Box>
              
              <CardActions
                sx={{
                  px: 2
                }}
              >
                { 
                  props.project.github && (width > 600)
                  ? <Button href={ props.project.github }>
                      <GitHubIcon />
                    </Button>
                  : null
                }
                { 
                  props.project.link && (width > 600)
                  ? <Button href={ props.project.link }>
                      <LinkIcon />
                    </Button>
                  : null
                }
              </CardActions>
            </CardContent>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={6}
          >
            <CardMedia
              component='img'
              image={ props.project.image }
              sx={
                (width < 600) ?
                  { height: '25vh' }
                  : { height: '100%' }
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default ProjectDisplay
