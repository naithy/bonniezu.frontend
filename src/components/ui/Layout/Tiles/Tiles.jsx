import React from 'react'
import styles from './Tiles.module.css'
import Tile from "../../../Tile/Tile"
import TileBig from '../../../Tile/TileBig'


const COLORS = {
    discord: '#7289da',
    faceit: '#FF5500',
    spotify: '#1DB954',
    steam: '#00adee',
    chatgpt: '#15A17E',
    xbox: '#107C0F',
    battlenet: '#08A5F4',
}

function Tiles() {
  return (
    <div className={styles.tiles}>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.discord} to='discord'></Tile>
            <Tile color={COLORS.faceit} title='Faceit' to='faceit'></Tile>
            <Tile color={COLORS.chatgpt} title='Chat GPT' to='chatgpt'></Tile>
        </div>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.spotify} title='Spotify' to='spotify'></Tile>
            <Tile color={COLORS.steam} to='steam'></Tile>
            <Tile color={COLORS.xbox} to='xbox'></Tile>
        </div>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.battlenet} to='battlenet'/>
            <Tile color={`var(--tg-theme-bg-color)`} to='other' title='Валюта для игр'></Tile>
        </div>
    </div>
  )
}

export default Tiles