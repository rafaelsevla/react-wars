import { ActionTypes as types } from './constants'
import client from 'client'
import { store } from 'store'
import { API } from 'routes'

export const fetchPeople = () => dispatch => {
  dispatch({
    type: types.FETCH_PEOPLE
  })

  client.get(`${API.PEOPLE}`)
    .then(response => {
      dispatch({
        type: types.FETCH_PEOPLE_SUCCESS,
        payload: response.data
      })
      store.dispatch(fetchMorePeople())
    })
    .catch(e =>
      dispatch({
        type: types.FETCH_PEOPLE_FAIL
      })
    )
}

export const fetchMorePeople = () => (dispatch, getState) => {
  const { nextPage } = getState().main

  dispatch({
    type: types.FETCH_MORE_PEOPLE
  })

  client.get(`${API.PEOPLE}?page=${nextPage}`)
    .then(response => {
      dispatch({
        type: types.FETCH_MORE_PEOPLE_SUCCESS,
        payload: response.data
      })
    })
    .catch(() => {
      dispatch({
        type: types.FETCH_MORE_PEOPLE_FAIL
      })
    })
}
