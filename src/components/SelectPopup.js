import React from 'react'
import { connect } from 'react-redux'

import { setSelectedPopup } from '../actions/'

class SelectPopup extends React.Component {
  render () {
    return (
      <select value={this.props.selectedPopup} onChange={this.props.onChange}>
        {this.props.popups.map((popup, i) => {
          return (
            <option value={i} key={i}>{popup.title}</option>
          )
        })}
      </select>
    )
  }

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    popups: React.PropTypes.array.isRequired,
    selectedPopup: React.PropTypes.number.isRequired,
  }
}

function mapStateToProps (state, ownProps) {
  return {
    popups: state.popups,
    selectedPopup: state.selectedPopup,
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onChange: function (event) {
      dispatch(setSelectedPopup(event.target.value))
    }
  }
}

const SelectPopupContainer = connect(mapStateToProps, mapDispatchToProps)(SelectPopup)

export default SelectPopupContainer
