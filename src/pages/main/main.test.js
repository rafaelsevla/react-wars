import reducer, { initialState } from './reducers'
import { ActionTypes as types } from './constants'
import { lukeSkywalker, C3PO, R2D2 } from 'utils/mocks'

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
    nextPage: 1
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return data of people', () => {
  const before = initialState

  const action = {
    type: types.FETCH_PEOPLE_SUCCESS,
    payload: {
      count: 87,
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
      count: 87,
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
    nextPage: 2
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
    nextPage: 1
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return more people loading = true', () => {
  const before = {
    people: {
      count: 87,
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

  const action = { type: types.FETCH_MORE_PEOPLE }

  const after = {
    people: {
      count: 87,
      next: "https://swapi.co/api/people/?page=2",
      previous: null,
      results: [
        lukeSkywalker,
        C3PO
      ]
    },
    loading: {
      allPeople: false,
      moreData: true
    },
    errorMessage: false,
    page: 1
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return more people than now', () => {
  const before = {
    people: {
      count: 87,
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
    nextPage: 2
  }

  const action = {
    type: types.FETCH_MORE_PEOPLE_SUCCESS,
    payload: {
      count: 87,
      next: "https://swapi.co/api/people/?page=3",
      previous: "https://swapi.co/api/people/?page=1",
      results: [R2D2]
    }
  }

  const after = {
    people: {
      count: 87,
      next: "https://swapi.co/api/people/?page=3",
      previous: "https://swapi.co/api/people/?page=1",
      results: [
        lukeSkywalker,
        C3PO,
        R2D2
      ]
    },
    loading: {
      allPeople: false,
      moreData: false
    },
    errorMessage: false,
    nextPage: 3
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return more people than now error', () => {
  const before = {
    people: {
      count: 87,
      next: "https://swapi.co/api/people/?page=2",
	    previous: null,
      results: [
        lukeSkywalker,
        C3PO,
        R2D2
      ]
    },
    loading: {
      allPeople: false,
      moreData: false
    },
    errorMessage: false,
    nextPage: 2
  }

  const action = { type: types.FETCH_MORE_PEOPLE_FAIL }

  const after = {
    people: {
      count: 87,
      next: "https://swapi.co/api/people/?page=2",
	    previous: null,
      results: [
        lukeSkywalker,
        C3PO,
        R2D2
      ]
    },
    loading: {
      allPeople: false,
      moreData: false
    },
    errorMessage: true,
    nextPage: 2
  }
  expect(reducer(before, action)).toEqual(after)
})