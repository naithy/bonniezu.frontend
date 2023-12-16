import React from 'react'
import styles from './Tiles.module.css'
import Tile from "../../../Tile/Tile"


const COLORS = {
    discord: '#7289da',
    faceit: '#FF5500',
    spotify: '#1DB954',
    steam: '#8fb3ad',
    chatgpt: '#15A17E',
    xbox: '#107C0F',
    battlenet: '#15171E',
    fortnite: '#006FE5'
}

function Tiles() {
  return (
    <div className={styles.tiles}>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.discord} title='Discord' to='discord'></Tile>
            <Tile color={COLORS.faceit} title='Faceit' to='faceit'></Tile>
            <Tile color={COLORS.chatgpt} title='Chat GPT' to='chatgpt'></Tile>
        </div>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.spotify} title='Spotify' to='spotify'></Tile>
            <Tile color={COLORS.steam} title='Steam' to='steam'></Tile>
            <Tile color={COLORS.xbox} title='Xbox' to='xbox'></Tile>
        </div>
        <div className={styles.tiles_column}>
            <Tile color={COLORS.fortnite} title='Fortnite' to='fortnite'></Tile>
            <Tile color={COLORS.battlenet} title='Battlenet' to='battlenet'/>
            <Tile color={`var(--tg-theme-bg-color)`} to='other' title='Валюта для игр'></Tile>
        </div>
    </div>
  )
}

export default Tiles