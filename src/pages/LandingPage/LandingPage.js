import { Box, Container, Typography } from '@mui/material'

const LandingPage = _ => {
  return (
    <Box
      component='div'
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
        <Typography
          component='div'
          variant='landing'
        >
          Hi, I'm Allen — a junior software engineer with a great passion for designing products that make things simple & obvious.
        </Typography>
      </Container>
    </Box>
  )
}

export default LandingPage
