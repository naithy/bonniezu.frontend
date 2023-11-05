import React from 'react'
import styles from './Header.module.css'
import {useTelegram} from '../../../../hooks/useTelegram'


const {user} = useTelegram()


function Navigation() {
  return (
    <div className={styles.header_inner}>
      <div className={styles.header_user}>
        <div className={styles.header_avatar}>
          {/* <img 
            alt={user?.username}
            src={user?.photo_url}
            width="36"
            height="36"
          >        
            </img> */}
        </div>
        <div className={styles.header_name}>Привет, {user?.first_name}</div>
      </div>
    </div>
  )
}

export default Navigation