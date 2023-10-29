import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import styles from './Button.module.css'


const Button = ({time, method, active, onClick, service}) => {

  return (
    <div className={active ? `${styles.button} ${styles.active}`: styles.button} onClick={onClick} style={{}}>
      {time && <div className={styles.time}>
        {time}
      </div>}
      {method && <div className={styles.method}>
        {method}
      </div>}
    </div>
  )
}

export default Button

