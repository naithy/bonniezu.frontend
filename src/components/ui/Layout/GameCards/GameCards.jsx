import React, { useEffect, useState } from 'react'
import styles from './GameCards.module.css'
import GameCard from '../../../GameCard/GameCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTelegram } from '../../../../hooks/useTelegram';


const { tgBgColor, tgSecondaryBgColor } = useTelegram()


const GameCards = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/games')
      .then(res => {return res.json();})
      .then((data) => {setGames(data)})
  }, [])

  return (
    <div className={styles.products_inner}>
      {games.map((game, id) => 
        <GameCard key={id} title={game.name} imgUrl={game.gameImage}/>
        // <Skeleton count={1} height='110px' borderRadius='15px' baseColor={tgBgColor} highlightColor={tgSecondaryBgColor}/>
      )}
    </div>
  )
}

export default GameCards