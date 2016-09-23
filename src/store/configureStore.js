import { createStore, combineReducers } from 'redux'
import {handleActions} from 'redux-actions'

import * as types from '../actions/types'

function isSeqReducer (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_SEQ':
      return !state
    default:
      return state
  }
}

function popupsReducer (state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

const selectedPopupReducer = handleActions({
  [types.SET_SELECTED_POPUP]: (state, action) => {
    return parseInt(action.payload)
  },
}, 0)

const openedPopupReducer = handleActions({
  [types.SET_OPENED_POPUP]: (state, action) => {
    if (!Number.isInteger(action.payload)) return null
    return action.payload
  },
}, null)

const isPopupOpenedReducer = handleActions({
  [types.SET_IS_POPUP_OPENED]: (state, action) => {
    return action.payload
  },
}, false)

export default function configureStore (initialState) {
  const store = createStore(
    combineReducers({
      popups: popupsReducer,
      isSeq: isSeqReducer,
      selectedPopup: selectedPopupReducer,
      openedPopup: openedPopupReducer,
      isPopupOpened: isPopupOpenedReducer,
    }),
    initialState,
  )

  return store
}
