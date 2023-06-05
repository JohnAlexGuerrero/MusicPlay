import React, { useEffect, useRef, useState } from 'react'

import PlayIcon from './icons/PlayIcons'
import PauseIcon from './icons/PauseIcons'
import ForwardIcon from './icons/ForwardIcons'
import BackwardIcon from './icons/BackwardIcons'
import TrackArt from './TrackArt'
import ProgressBar from './ProgressBar'


const AudioPlayer = ({props}) => {
    
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    const audioRef = useRef()

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [album, setAlbum] = useState('')
    const [time, setTime] = useState(0)

    useEffect(()=>{
        setUrl(props.thumbnail)
        setAuthor(props.artist)
        setTitle(props.title)
        setThumbnail(props.thumbnail)
        setAlbum(props.album)

        let time = (props['time'].min * 60) + props['time'].sec
        setTime(time) 

    },[])

    const playTrack = ()=>{
        audioRef.current.play()

        setIsActive(true)
        setIsPaused(!true)
    }

    const pauseTrack = ()=>{
        audioRef.current.pause()

        setIsActive(false)
        // setIsActive(!isActive)
    }

    return (
        <div className='p-1 border-white bg-white rounded-lg shadow-2xl w-{180} '>
            <audio src={props.url} ref={audioRef}/>

            <div className='flex items-center'>
                <TrackArt
                    thumbnail={thumbnail}
                    title={title}
                    active={isActive}
                />

                <div className='flex flex-col'>
                    <span className='text-xl font-bold'>
                        {title}
                    </span>
                    <span className='mt-1 text-base font-medium text-red-600'>
                        {author}
                    </span>
                    <small className='text-slate-400'>
                        {album}
                    </small>
                </div>

                <div className='flex'>
                    <div
                        className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                    >
                        <BackwardIcon width={50} className="w-full" />
                    </div>

                    {
                        isActive && isPaused == false ? (
                            <div
                                className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                                onClick={pauseTrack}
                            >
                                <PauseIcon width={50} className="w-full" />
                            </div>
                        ) : (
                            <div
                                className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                                onClick={playTrack}
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
                        <ForwardIcon width={50} className="w-full" />
                    </div>
                </div>
            </div>
            
            <ProgressBar
                active={isActive}
                paused={isPaused}
                time={time}
            />   
        </div>
    )
}

export default AudioPlayer
