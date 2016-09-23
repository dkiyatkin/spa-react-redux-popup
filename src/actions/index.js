import {createAction} from 'redux-actions'

import * as types from './types'

export function toggleSeq () {
  return {
    type: 'TOGGLE_SEQ',
  }
}

export const setOpenedPopup = createAction(types.SET_OPENED_POPUP)

export const setSelectedPopup = createAction(types.SET_SELECTED_POPUP)

export const setIsPopupOpened = createAction(types.SET_IS_POPUP_OPENED)
