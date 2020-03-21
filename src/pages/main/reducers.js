import { ActionTypes as types } from './constants'

export const initialState = {
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
  nextPage: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return { ...state, loading: { allPeople: true, moreData: false }, errorMessage: false }

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
        nextPage: state.nextPage + 1
      }

    case types.FETCH_MORE_PEOPLE_FAIL:
      return {
        ...state,
        errorMessage: true
      }

    default:
      return state
  }
}
