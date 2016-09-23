import React from 'react'
import { connect } from 'react-redux'

import { setIsPopupOpened } from '../actions/'

export class PopupBody extends React.Component {

  handleClickFinish = (event) => {
    this.props.closePopup()
  }

  render () {
    const popup = this.props.popup

    return (
      <div>
        <div>
          <div onClick={this.props.closePortal} />
          <h2>{popup.title}</h2>
          <p dangerouslySetInnerHTML={{__html: popup.text}} />
          <button onClick={this.handleClickFinish}>FINISH</button>
        </div>
      </div>
    )
  }

  static propTypes = {
    closePortal: React.PropTypes.func,
    popup: React.PropTypes.object,
    closePopup: React.PropTypes.func.isRequired,
  }

}

function mapStateToProps (state, ownProps) {
  return {
    popups: state.popups,
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    closePopup: function () {
      dispatch(setIsPopupOpened(false))
    }
  }
}

const PopupBodyContainer = connect(mapStateToProps, mapDispatchToProps)(PopupBody)

export default PopupBodyContainer
