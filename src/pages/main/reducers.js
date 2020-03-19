import { ActionTypes as types } from './constants'

export const initialState = {
  buttonClick: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_STATE:
      return { initialState }

    case types.CLICK_BUTTON:
      return { buttonClick: true }

    default:
      return state
  }
}
