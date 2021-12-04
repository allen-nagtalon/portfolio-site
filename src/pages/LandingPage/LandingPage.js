import { Box, Container, Typography, Fade } from '@mui/material'
import VisibilitySensor from 'react-visibility-sensor'

const LandingPage = _ => {
  return (
    <Box
      component='div'
      id='landing'
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'secondary.main'
      }}
    >
      <Container 
        maxWidth='md'
      >
        <VisibilitySensor>
          {({isVisible}) =>
            <Fade 
              in={isVisible}
              timeout={2000}
            >
              <Typography
                component='div'
                variant='landing'
              >
                Hi, my name is [ Allen ] — a junior software engineer with a great passion for designing products that make things simple & obvious.
              </Typography>
            </Fade>
          }
        </VisibilitySensor>
      </Container>
    </Box>
  )
}

export default LandingPage
