import React from 'react'
import { connect } from 'react-redux'

import { toggleSeq } from '../actions/'

class ToggleSeq extends React.Component {
  render () {
    return (
      <label>
        <input type='checkbox' checked={this.props.isSeq} onChange={this.props.onChange} />
        {' '}
        Open all popups
      </label>
    )
  }

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    isSeq: React.PropTypes.bool.isRequired,
  }
}

function mapStateToProps (state, ownProps) {
  return {
    isSeq: state.isSeq
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: () => {
      dispatch(toggleSeq())
    }
  }
}

const ToggleSeqContainer = connect(mapStateToProps, mapDispatchToProps)(ToggleSeq)

export default ToggleSeqContainer
