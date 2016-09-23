import 'normalize.css'
import 'babel-polyfill'

import '../styles/main.global.scss'
import styles from '../styles/app.scss'

import React from 'react'

import FormPopup from './FormPopup'

class App extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        <div className={styles.shadow}>
          <div className={styles.tabs}>
            <div className={styles.tab}>
              <span> Users </span>
            </div>
            <div className={styles.tabActive}>
              <span> Statistics </span>
            </div>
          </div>
          <FormPopup className={styles.formPopup} />
        </div>
      </div>
    )
  }
}

export default App
