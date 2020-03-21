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
  page: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return { ...state, loading: { allPeople: true, moreData: false }, errorMessage: false }

    case types.FETCH_PEOPLE_SUCCESS:
      return { ...state, loading: initialState.loading, people: action.payload }

    case types.FETCH_PEOPLE_FAIL:
      return {
        ...state,
        loading: initialState.loading,
        people: initialState.people,
        errorMessage: true
      }

    default:
      return state
  }
}
