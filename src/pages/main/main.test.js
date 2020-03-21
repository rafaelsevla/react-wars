import reducer, { initialState } from './reducers'
import { ActionTypes as types } from './constants'
import { lukeSkywalker, C3PO } from 'utils/mocks'

test('should be loading people props', () => {
  const before = initialState

  const action = { type: types.FETCH_PEOPLE }

  const after = {
    people: {
      count: 0,
      next: '',
      previous: null,
      results: []
    },
    loading: {
      allPeople: true,
      moreData: false
    },
    errorMessage: false,
    page: 1
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return data of people', () => {
  const before = initialState

  const action = {
    type: types.FETCH_PEOPLE_SUCCESS,
    payload: {
      count: 2,
      next: "https://swapi.co/api/people/?page=2",
	    previous: null,
      results: [
        lukeSkywalker,
        C3PO
      ]
    }
  }

  const after = {
    people: {
      count: 2,
      next: "https://swapi.co/api/people/?page=2",
	    previous: null,
      results: [
        lukeSkywalker,
        C3PO
      ]
    },
    loading: {
      allPeople: false,
      moreData: false
    },
    errorMessage: false,
    page: 1
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be errorMessage on fetch people', () => {
  const before = initialState

  const action = { type: types.FETCH_PEOPLE_FAIL }

  const after = {
    people: {
      count: 0,
      next: '',
      previous: null,
      results: []
    },
    loading: {
      allPeople: false,
      moreData: false
    },
    errorMessage: true,
    page: 1
  }
  expect(reducer(before, action)).toEqual(after)
})