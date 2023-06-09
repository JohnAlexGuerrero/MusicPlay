"use client"

import React, { useEffect, useState } from 'react';

import AudioPlayer from './components/AudioPlayer'
import ListSong from './components/ListSong'
import AlbumArt from './components/AlbumArt'

const Home = () => {

  const [song, setSong] = useState({})
  const [isActive, setIsActive] = useState(true)

  const handleSongChoice = (item) =>{
    setSong(item)
    setIsActive(!isActive)
  }

  return (
    <div className='flex justify-between w-full p-0 absolute left-10 top-32'>
      <div className='w-1/3'>
        <AlbumArt item={song} active={isActive} />
        <AudioPlayer item={song} active={isActive} />
      </div>
      <div className='w-9/12 p-2'>
        <ListSong handleChoice={handleSongChoice} />
      </div>

    </div>
  )
}

export default Home

// https://dribbble.com/shots/13999318/attachments/5614167?mode=media

// https://api.lyrics.ovh/suggest/coldplay