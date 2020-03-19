import reducer, { initialState } from './reducers'
import { ActionTypes as types } from './constants'

test('should be return buttonClick: true ', () => {
  const before = initialState

  const action = { type: types.CLICK_BUTTON }

  const after = {
    buttonClick: true
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return buttonClick: false ', () => {
  const before = { buttonClick: true }

  const action = { type: types.RESET_STATE }

  const after = { initialState }

  expect(reducer(before, action)).toEqual(after)
})

test('should be return old state', () => {
  const before = { buttonClick: true }

  const action = { type: 'UNKNOW_ACTION' }

  const after = { buttonClick: true }

  expect(reducer(before, action)).toEqual(after)
})
