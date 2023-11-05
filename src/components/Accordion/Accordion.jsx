import React from 'react'
import styles from './Accordion.module.css'


const Accordion = ({title, content}) => {
  return (
    <details open>
        <summary>{title}</summary>
        <div className={styles.content}>
            <p>{content}</p>
        </div>
    </details>
  )
}

export default Accordion