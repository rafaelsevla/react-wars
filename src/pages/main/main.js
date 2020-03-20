import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import t from 'prop-types'
import { fetchPeople } from './actions'
import styled from 'styled-components'

import {
  Button,
  Grid,
  Card as CardMaterial,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
// import { Autorenew } from '@material-ui/icons'

import { Header } from 'ui'

function Main ({ people, fetchPeople }) {
  useEffect(() => {
    fetchPeople()
  }, [fetchPeople])

  return (
    <Grid>
      <Header>
        React Wars
      </Header>

      <Container item xs={12}>
        <Grid container justify='center' spacing={2}>
          {people.results.map(person => (
            <Grid key={person.url} item>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {person.name} <Span>({person.gender})</Span>
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  )
}

const Container = styled(Grid)`
  padding-bottom: 30px;
  padding-top: 80px;
`

const Card = styled(CardMaterial)`
  max-width: 345px;
`

const Span = styled.span`
  font-size: 17px;
`

Main.propTypes = {
  fetchPeople: t.func.isRequired,
  people: t.object.isRequired
}

const mapStateToProps = state => {
  const { main } = state

  return { ...main }
}

const mapDispatchToProps = {
  fetchPeople
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
