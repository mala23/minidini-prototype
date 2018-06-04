import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'

// Import Style
import styles from './AddPostButton.css'

function AddPostButton() {
  return (
    <div className={styles['add-post-button']}>
    <img className={styles['add-post-icon']} src="https://s3.eu-central-1.amazonaws.com/minidini/images/icons/icon_plus.svg" alt="Add Item Icon"/>
    </div>
  )
}

export default AddPostButton
