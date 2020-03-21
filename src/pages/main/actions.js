import { ActionTypes as types } from './constants'
import client from 'client'
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
    })
    .catch(e => console.log(e))
}

export const clickButton = () => ({
  type: types.CLICK_BUTTON
})
