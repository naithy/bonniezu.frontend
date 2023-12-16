import React from 'react'
import { Icon } from '@iconify/react'
import discordIcon from '@iconify/icons-simple-icons/discord';
import faceitIcon from '@iconify/icons-simple-icons/faceit'
import spotifyIcon from '@iconify/icons-simple-icons/spotify';
import steamIcon from '@iconify/icons-simple-icons/steam';
import openaiChatgpt from '@iconify/icons-arcticons/openai-chatgpt';
import xboxIcon from '@iconify/icons-bi/xbox';
import battleNetIcon from '@iconify/icons-fa6-brands/battle-net';
import styles from './Tile.module.css'
import { useNavigate } from 'react-router-dom'


const ICONS = {
  discord: discordIcon,
  faceit: faceitIcon,
  spotify: spotifyIcon,
  steam: steamIcon,
  chatgpt: openaiChatgpt,
  xbox: xboxIcon,
  battlenet: battleNetIcon
}


function Tile({color, title, to}) {

  const navigate = useNavigate()

  return (
      <div className={styles.tile} style={{background: color}} onClick={() => navigate(`/${to}`)}>
        <div className={styles.tile_inner}>
          <div className={styles.tile_icon}>
            <Icon icon={ICONS[to]} width="36"/>
          </div>
          <div className="tile_title">{title}</div>
        </div>
      </div>
  )
}

export default Tile