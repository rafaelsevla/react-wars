import reducer, { initialState } from './reducers'
import { ActionTypes as types } from './constants'
import { lukeSkywalker, C3PO, R2D2, Executor } from 'utils/mocks'

test('should be loading people props', () => {
  const before = initialState

  const action = { type: types.FETCH_PEOPLE }

  const after = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 1,
    disableButtonLoadMore: false,
    planet: ''
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
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 2,
    disableButtonLoadMore: false,
    planet: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be disable load on error on fetch people', () => {
  const before = initialState

  const action = { type: types.FETCH_PEOPLE_FAIL }

  const after = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 1,
    disableButtonLoadMore: false,
    planet: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return more people loading = true', () => {
  const before = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    disableButtonLoadMore: false,
    planet: ''
  }

  const action = { type: types.FETCH_MORE_PEOPLE }

  const after = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    disableButtonLoadMore: false,
    planet: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return more people than now', () => {
  const before = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 2,
    disableButtonLoadMore: false,
    planet: ''
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
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 3,
    disableButtonLoadMore: false,
    planet: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return more people than now error', () => {
  const before = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 2,
    planet: ''
  }

  const action = { type: types.FETCH_MORE_PEOPLE_FAIL }

  const after = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 2,
    planet: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return more people than now and doest have next page', () => {
  const before = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 2,
    disableButtonLoadMore: false,
    planet: ''
  }

  const action = {
    type: types.FETCH_MORE_PEOPLE_SUCCESS,
    payload: {
      count: 87,
      next: null,
      previous: "https://swapi.co/api/people/?page=1",
      results: [R2D2]
    }
  }

  const after = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
    people: {
      count: 87,
      next: null,
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
    nextPage: 3,
    disableButtonLoadMore: true,
    planet: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return planet name', () => {
  const before = initialState

  const action = {
    type: types.FETCH_PLANET_SUCCESS,
    payload: 'Tatooine'
  }

  const after = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 1,
    disableButtonLoadMore: false,
    planet: 'Tatooine'
  }
  expect(reducer(before, action)).toEqual(after)
})


test('should be reset planet name', () => {
  const before = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 1,
    disableButtonLoadMore: false,
    planet: 'Tatooine'
  }

  const action = {
    type: types.RESET_PLANET
  }

  const after = {
    starships: {
      count: 0,
      next: '',
      previous: null,
      data: {}
    },
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
    nextPage: 1,
    disableButtonLoadMore: false,
    planet: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

