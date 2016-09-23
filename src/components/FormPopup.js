import styles from '../styles/formPopup.scss'

import React from 'react'

import ToggleSeq from './ToggleSeq'
import SelectPopup from './SelectPopup'
import PopupButton from './PopupButton'

class FormPopup extends React.Component {
  render () {
    return (
      <div className={this.props.className}>
        <div className={styles.title}>
          <h1>Some statistics</h1>
        </div>
        <div className={styles.form}>
          <div>
            <div className={styles.checkbox}>
              <ToggleSeq />
            </div>
            <SelectPopup />
            <PopupButton />
          </div>
        </div>
      </div>
    )
  }

  static propTypes = {
    className: React.PropTypes.string,
  }
}

export default FormPopup
