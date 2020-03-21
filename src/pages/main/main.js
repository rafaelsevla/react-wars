import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import t from 'prop-types'
import styled from 'styled-components'

import {
  Button,
  Grid,
  Card as CardMaterial,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CircularProgress
} from '@material-ui/core'

import { fetchPeople, fetchMorePeople } from './actions'

import { Header } from 'ui'

function Main ({ people, fetchPeople, loading, fetchMorePeople }) {
  useEffect(() => {
    fetchPeople()
  }, [fetchPeople])

  function fetchImage () {
    const randomNumber = Math.round(Math.random() * (500 - 200) + 200)
    return `https://i.picsum.photos/id/${randomNumber}/350/200.jpg`
  }

  return (
    <Grid>
      <Header>
        React Wars
      </Header>

      <Container item xs={12}>
        {loading.allPeople ? (
          <Grid align='center'>
            <CircularProgress />
          </Grid>
        ) : (
          <>
            <Grid container justify='center' spacing={2}>
              {people.results.map(person => (
                <Grid key={person.url} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        alt={person.name}
                        height='140'
                        src={fetchImage()}
                        title={person.name}
                      />
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
                        Ver mais
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <GridButton container direction='row' xs={12} justify='center'>
              <ButtonLoading variant='contained' color='primary' onClick={fetchMorePeople}>
                {loading.moreData ? (
                  <CircularProgress size={25} color='inherit' />
                ) : (
                  'Carregar mais personagens'
                )}
              </ButtonLoading>
            </GridButton>
          </>
        )}
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

const GridButton = styled(Grid)`
  margin-top: 30px;
`

const ButtonLoading = styled(Button)`
  width: 255px;
  height: 36px;
`

Main.propTypes = {
  fetchPeople: t.func.isRequired,
  people: t.object.isRequired,
  fetchMorePeople: t.func.isRequired,
  loading: t.object.isRequired
}

const mapStateToProps = state => {
  const { main } = state

  return { ...main }
}

const mapDispatchToProps = {
  fetchPeople,
  fetchMorePeople
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
