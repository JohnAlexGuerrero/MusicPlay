"use client"

import React, { useEffect, useState } from 'react';

import ListSong from './components/ListSong'

import AudioPlayer from './components/AudioPlayer';
import {data} from './api/data'

const Home = () => {

  const [song, setSong] = useState({})
  const [isActive, setIsActive] = useState(true)
  const [list, setList] = useState([])

  useEffect(()=>{
    let list = []

    data.map(item =>{
      list.push(item)
    })

    setList(list)
  }, [])

  const handleSongChoice = (item) =>{ 
    setSong(item)
    setIsActive(!isActive)
  }

  return (
    <div className='flex w-full p-0 absolute left-10 top-32'>
      {/* <div className='w-1/3'>
        <AlbumArt item={song} active={isActive} />

      </div> */}
      <div className='w-1/4 p-1'>
        <ListSong handleChoice={handleSongChoice} list={list}/>
      </div>

      <div className='w-1/4 p-1 relative'>
        <AudioPlayer item={song} active={isActive}/>
      </div>

    </div>
  )
}

export default Home

// https://dribbble.com/shots/13999318/attachments/5614167?mode=media
// https://dribbble.com/shots/2449648-TV-music/attachments/477174?mode=media