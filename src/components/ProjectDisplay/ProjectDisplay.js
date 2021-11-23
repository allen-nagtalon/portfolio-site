import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Paper, Card, CardContent } from '@mui/material'

function ProjectDisplay(props)
{
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <Carousel>
      {
        items.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
}

function Item(props)
{
  return (
    <Paper>
      <Grid container spacing={0}>
        <Grid item xs={4}> 
          <CardContent>

          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardContent>

          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardContent>

          </CardContent> 
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProjectDisplay
