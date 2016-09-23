import styles from '../styles/popupButton.scss'

import React from 'react'
import { connect } from 'react-redux'
import Portal from 'react-portal'

import { setIsPopupOpened, setOpenedPopup } from '../actions/'
import PopupBody from './PopupBody'

class PopupButton extends React.Component {

  onClose = () => {
    if (this.props.isPopupOpened) { // окно отменено
      this.props.closePopup()
    } else { // нужно ли показывать следующие
      if (this.props.isSeq) {
        if (this.props.popups.length > this.props.openedPopup + 1) {
          process.nextTick(() => { // будет видно что окошко исчезнет
            this.props.openPopup(this.props.openedPopup + 1)
          })
        }
      }
    }
  }

  onClick = () => {
    this.props.openPopup(this.props.selectedPopup)
  }

  render () {
    let popupBody
    if (Number.isInteger(this.props.openedPopup)) {
      const popup = this.props.popups[this.props.openedPopup]
      popupBody = <PopupBody popup={popup} />
    } else {
      popupBody = null
    }

    return (
      <div className={styles.popupButton}>
        <button onClick={this.onClick}>OPEN</button>
        <Portal closeOnEsc closeOnOutsideClick isOpened={this.props.isPopupOpened} onClose={this.onClose} className={styles.overlay}>
          {popupBody}
        </Portal>
      </div>
    )
  }

  static propTypes = {
    popups: React.PropTypes.array.isRequired,
    selectedPopup: React.PropTypes.number.isRequired,
    openedPopup: React.PropTypes.number,
    isPopupOpened: React.PropTypes.bool,
    isSeq: React.PropTypes.bool,
    openPopup: React.PropTypes.func.isRequired,
    closePopup: React.PropTypes.func.isRequired,
  }
}

function mapStateToProps (state, ownProps) {
  return {
    popups: state.popups,
    selectedPopup: state.selectedPopup,
    openedPopup: state.openedPopup,
    isPopupOpened: state.isPopupOpened,
    isSeq: state.isSeq,
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    openPopup: function (popupId) {
      dispatch(setOpenedPopup(popupId))
      dispatch(setIsPopupOpened(true))
    },
    closePopup: function () {
      dispatch(setIsPopupOpened(false))
      dispatch(setOpenedPopup(false))
    }
  }
}

const PopupButtonContainer = connect(mapStateToProps, mapDispatchToProps)(PopupButton)

export default PopupButtonContainer
