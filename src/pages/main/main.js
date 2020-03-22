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
  CardContent as CardContentMaterial,
  Typography,
  CircularProgress
} from '@material-ui/core'

import { fetchPeople, fetchMorePeople, fetchStarships } from './actions'

import { Header } from 'ui'

function Main ({
  people,
  starships,
  loading,
  disableButtonLoadMore,
  fetchPeople,
  fetchMorePeople,
  fetchStarships
}) {
  useEffect(() => {
    fetchPeople()
  }, [fetchPeople])

  useEffect(() => {
    fetchStarships(1)
  }, [fetchStarships])

  function fetchImage (number) {
    if (number === 86) number = 87
    return `https://i.picsum.photos/id/${number}/350/200.jpg`
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
                        src={fetchImage(person.url.match(/\d+/).join(''))}
                        title={person.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {person.name} <Span>({person.gender})</Span>
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                          {person.starships.length > 0 && (
                            <>
                              <span>Starships:</span>
                              <br />
                              <span>
                                {
                                  person.starships.map(starship =>
                                    starships.data[starship] && (
                                      starships.data[starship].name
                                    )
                                  ).join(', ')
                                }
                              </span>
                            </>
                          )}
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
            <GridButton container direction='row' justify='center'>
              <ButtonLoading
                variant='contained'
                color='primary'
                onClick={fetchMorePeople}
                disabled={loading.moreData || disableButtonLoadMore}
              >
                {loading.moreData ? (
                  <CircularProgress size={25} color='inherit' />
                ) : disableButtonLoadMore ? (
                  'Não tem mais personagens para carregar'
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
  && {
    &:disabled {
      color: #fff;
      background-color: #3f51b5;
      opacity: 0.7;
    }
  }
`

const CardContent = styled(CardContentMaterial)`
  width: 330px;
  height: 135px;
`

Main.propTypes = {
  people: t.object.isRequired,
  starships: t.object.isRequired,
  loading: t.object.isRequired,
  disableButtonLoadMore: t.bool.isRequired,
  fetchPeople: t.func.isRequired,
  fetchMorePeople: t.func.isRequired,
  fetchStarships: t.func.isRequired
}

const mapStateToProps = state => {
  const { main } = state

  return { ...main }
}

const mapDispatchToProps = {
  fetchPeople,
  fetchMorePeople,
  fetchStarships
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
