import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className={`${styles.toggleButton} ${darkMode ? styles.dark : ''}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Toggle Light' : 'Toggle Dark'}
    </button>
  )
}

export default DarkModeToggle