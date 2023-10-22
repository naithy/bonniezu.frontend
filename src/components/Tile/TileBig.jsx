import React from 'react'
import styles from './Tile.module.css'
import { useNavigate } from 'react-router-dom'


function TileBig({color, title, to}) {

  const navigate = useNavigate()

  return (
    <div className={styles.tile_other} style={{background: color}} onClick={() => navigate(`/${to}`)}>
        <div className={styles.tile_inner}>
          <div className="tile_title">{title}</div>
        </div>
    </div>
  )
}

export default TileBig