import { ActionTypes as types } from './constants'

export const initialState = {
  people: {},
  loading: true,
  errorMessage: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return { ...state, loading: true, errorMessage: false }

    case types.FETCH_PEOPLE_SUCCESS:
      return { ...state, loading: false, people: action.payload }

    case types.FETCH_PEOPLE_FAIL:
      return { ...state, loading: false, people: {}, errorMessage: true }

    default:
      return state
  }
}
