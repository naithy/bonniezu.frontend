import React from 'react'
import styles from './Tiles.module.css'
import Tile from "../../../Tile/Tile"
import TileBig from '../../../Tile/TileBig'
import ServicePage from '../../../screens/ServicePage/ServicePage'


const COLORS = {
    discord: '#7289da',
    faceit: '#FF5500',
    spotify: '#1DB954',
    steam: '#00adee',
}

function Tiles() {
  return (
    <div className={styles.tiles}>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.discord} to='discord'></Tile>
            <Tile color={COLORS.faceit} title='Faceit' to='faceit'>
                
            </Tile>
        </div>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.spotify} title='Spotify' to='spotify'></Tile>
            <Tile color={COLORS.steam} to='steam'></Tile>
        </div>
        <div className={styles.tiles_column}>
            <TileBig color={`var(--tg-theme-bg-color)`} to='other' title='...'></TileBig>
        </div>
    </div>
  )
}

export default Tiles