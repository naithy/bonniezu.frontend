import React, { useEffect, useState } from 'react'
import styles from './GameCards.module.css'
import GameCard from '../../../GameCard/GameCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTelegram } from '../../../../hooks/useTelegram';
import { Link } from 'react-router-dom';


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
        <Link key={id} to={`/games/${game._id}`}><GameCard title={game.name} imgUrl={game.gameImage}/></Link>
      )}
    </div>
  )
}

export default GameCards