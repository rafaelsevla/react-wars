import { ActionTypes as types } from './constants'

export const initialState = {
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
  errorMessage: false,
  nextPage: 1,
  disableButtonLoadMore: false,
  planet: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return {
        ...state,
        loading: { allPeople: true, moreData: false },
        errorMessage: false,
        nextPage: 1
      }

    case types.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: initialState.loading,
        people: action.payload,
        nextPage: state.nextPage + 1
      }

    case types.FETCH_PEOPLE_FAIL:
      return {
        ...initialState,
        errorMessage: true
      }

    case types.FETCH_MORE_PEOPLE:
      return {
        ...state,
        loading: {
          allPeople: false,
          moreData: true
        },
        errorMessage: false
      }

    case types.FETCH_MORE_PEOPLE_SUCCESS:
      return {
        ...state,
        people: {
          ...state.people,
          next: action.payload.next,
          previous: action.payload.previous,
          results: [...state.people.results, ...action.payload.results]
        },
        loading: {
          allPeople: false,
          moreData: false
        },
        nextPage: state.nextPage + 1,
        disableButtonLoadMore: !action.payload.next
      }

    case types.FETCH_MORE_PEOPLE_FAIL:
      return {
        ...state,
        loading: {
          allPeople: false,
          moreData: false
        },
        errorMessage: true
      }

    case types.FETCH_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: {
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous,
          data: { ...state.starships.data, ...action.payload.data }
        }
      }

    case types.FETCH_PLANET_SUCCESS:
      return {
        ...state,
        planet: action.payload
      }

    case types.RESET_PLANET:
      return {
        ...state,
        planet: ''
      }

    default:
      return state
  }
}
