import React from 'react'
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
      music : 'music/Stan Long.mp3'
  }

const Home = () => {

  return (
    <div className='p-1 border-white bg-white rounded-lg shadow-2xl w-{180} '>
      <div className='flex items-center'>
        <TrackArt props={music_list}/>
        <div className='flex flex-col'>
          <span className='text-2xl font-bold'>
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
          <span className='w-8 h-8 hover:border-[bg-slate-200] items-center hover:bg-slate-200 cursor-pointer rounded-full p-2'>
              <BackwardIcon width={50} className="w-full"/>
          </span>
          {true ? (
            <span className='w-8 h-8 hover:border-[bg-slate-200] items-center hover:bg-slate-200 cursor-pointer rounded-full p-2'>
              <PlayIcon width={50} className="w-full"/>
            </span>
          ):(
            <span className='w-8 h-8 hover:border-[bg-slate-200] items-center hover:bg-slate-200 cursor-pointer rounded-full p-2'>
              <PauseIcon width={50} className="w-full"/>
            </span>
          )}
          <span className='w-8 h-8 hover:border-[bg-slate-200] items-center hover:bg-slate-200 cursor-pointer rounded-full p-2'>
            <ForwardIcon width={50} className="w-full"/>
          </span>
        </div>
      </div>
      
      <SliderBar />
    </div>
  )
}

export default Home

// https://dribbble.com/shots/4537957-Framer-Music-Player