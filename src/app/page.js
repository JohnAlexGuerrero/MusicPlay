"use client"

import React, { useState } from 'react';
import PlayIcon from './components/icons/PlayIcons'
import PauseIcon from './components/icons/PauseIcons'
import ForwardIcon from './components/icons/ForwardIcons'
import BackwardIcon from './components/icons/BackwardIcons'
import TrackArt from './components/TrackArt'
import SliderBar from './components/SliderBar'



const music_list = {
      img : 'https://lastfm.freetls.fastly.net/i/u/ar0/2624ca521fc7420c8047c12b3b2eec0b.jpg',
      name : 'October and April',
      artist : 'The Rasmus',
      music : 'music/Stan Long.mp3',
      time:{
        min:2,
        sec:34
      }
  }

const Home = () => {


  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [timeSong, setTimeSong] = useState(0)

  const handleStartTimer = ()=>{
    setIsActive(true);
    setIsPaused(false);
    let timeSong = (music_list['time'].min * 60) + music_list['time'].sec
    setTimeSong(timeSong) 
  }

  const handlePauseTimer = ()=>{
    setIsPaused(!isPaused)
    setIsActive(!isActive)
  }

  return (
    <div className='p-1 border-white bg-white rounded-lg shadow-2xl w-{180} '>
      <div className='flex items-center'>
        <TrackArt 
          props={music_list}
          active={isActive}
        />
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>
            {music_list.name}
          </span>
          <span className='mt-1 text-base font-medium text-red-600'>
            {music_list.artist}
          </span>
          <small className='text-slate-400'>
            My Beautiful Dark Twisted Fantasy
          </small>
        </div>
        <div className='flex'>
          <div 
            className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
          >
            <BackwardIcon width={50} className="w-full"/>
          </div>
          { isActive && isPaused === false ? (
              <div
                className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                onClick={handlePauseTimer}
              >
                <PauseIcon width={50} className="w-full"/>
              </div>
            ):(
              <div
                className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                onClick={handleStartTimer}  
              >
                <PlayIcon 
                  width={50}
                  className="w-full p-0 m-0"
                />
              </div>
            )
          }
          <div
            className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
          >
            <ForwardIcon width={50} className="w-full"/>
          </div>
        </div>
      </div>

      <SliderBar
        active={isActive}
        paused={isPaused}
        time={timeSong}
      />      


    </div>
  )
}

export default Home

// https://dribbble.com/shots/4537957-Framer-Music-Player