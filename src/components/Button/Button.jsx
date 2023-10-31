import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import styles from './Button.module.css'


const Button = ({inner, active, onClick}) => {

  return (
    <>
      <li className={active ? `${styles.button} ${styles.active}`: styles.button} onClick={onClick}>
        {inner}
      </li>
    </>
  )
}

export default Button

