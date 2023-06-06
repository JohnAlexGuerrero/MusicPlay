"use client"

import React, { useEffect, useState } from 'react';

import AudioPlayer from './components/AudioPlayer'
import ListSong from './components/ListSong'




// const music_list = {
//       thumbnail : 'https://playfeel.weebly.com/uploads/1/2/7/2/12725304/720056125.jpg',
//       title : 'speed of sound',
//       album : 'x & y',
//       artist : 'coldplay',
//       url : 'coldplay/speed of sound.MP3',
//       time:288,
//   }

const Home = () => {


  return (
    <div>
      estamos en el home

      <AudioPlayer />
      <ListSong />

    </div>
  )
}

export default Home

// https://dribbble.com/shots/13999318/attachments/5614167?mode=media