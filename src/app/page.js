"use client"

import React, { useEffect, useState } from 'react';

import AudioPlayer from './components/AudioPlayer'



const music_list = {
      thumbnail : 'https://playfeel.weebly.com/uploads/1/2/7/2/12725304/720056125.jpg',
      title : 'speed of sound',
      album : 'x & y',
      artist : 'coldplay',
      url : 'coldplay/speed of sound.MP3',
      time:{
        min:4,
        sec:48
      }
  }

const Home = () => {


  const [timeSong, setTimeSong] = useState(0)
  const [trackUrl, setTrackUrl] = useState('')

  useEffect(()=>{
    setTrackUrl(music_list.music)
  },[])

  return (
    <div>
      <AudioPlayer props={music_list} />
    </div>
  )
}

export default Home

// https://dribbble.com/shots/4537957-Framer-Music-Player