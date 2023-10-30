import React from 'react'
import Tiles from './Tiles/Tiles'
import Header from './Header/Header'
import GameCards from './GameCards/GameCards'
import GamesHeader from './GamesHeader/GamesHeader'

const Layout = () => {
  return (
    <>
      <Header/>
      <Tiles/>
      <GamesHeader/>
      <GameCards/>
    </>
  )
}

export default Layout