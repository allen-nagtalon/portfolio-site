import { Container, Box, Typography } from '@mui/material'

const AboutPage = _ => {
  return (
    <Box
      component='div'
      id='about'
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Container 
        maxWidth='md'
      >
        <Typography
          variant='h3'
          py={2}
        >
          A little about [ me ] ...
        </Typography>
        <Typography
          variant='h5'
          py={2}
        >
          [ I ] am a junior software engineer looking to take my next steps into the field of software development.
        </Typography>
        <Typography
          variant='h5'
          py={2}
        >
          [ I ] thrive in both individual and group settings and am always looking to improve at my craft to provide a clean, user-friendly experience.
        </Typography>
        <Typography
          variant='h5'
          py={2}
        >
          While [ my ] current focus has been strengthening my full-stack development skills, [ I ] am always excited to delve into a new section of the software engineering world.
        </Typography>
        <Typography
          variant='h5'
          py={2}
        >
          Outside of software, you might find [ me ] grinding in various video games, attempting new recipes in the kitchen, dabbling in the art of photography, or singing/dancing to my favorite music.
        </Typography>
      </Container>
    </Box>
  )
}

export default AboutPage
