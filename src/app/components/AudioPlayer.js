import React, { useEffect, useRef, useState } from 'react'

import PlayIcon from './icons/PlayIcons'
import PauseIcon from './icons/PauseIcons'
import ForwardIcon from './icons/ForwardIcons'
import BackwardIcon from './icons/BackwardIcons'
import TrackArt from './TrackArt'
import ProgressBar from './ProgressBar'


const AudioPlayer = ({item, active}) => {
    
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const audioRef = useRef()

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [time, setTime] = useState(0)

    useEffect(()=>{
        if (Object.entries(item).length != 0 ) {
            setUrl(item.url)
            setAuthor(item.artist)
            setTitle(item.title)
            setThumbnail(item.thumbnail)
            setTime(item.duration)

            playTrack()
        }
        
    },[isPaused, active])

    const autoPlayTrack = () =>{
        if (!isActive && isPaused == false) {
            playTrack()
            setIsActive(!isActive)
        }
    }

    const playTrack = ()=>{
        audioRef.current.play()

        setIsActive(!isActive)
    }

    const pauseTrack = ()=>{
        audioRef.current.pause()

        setIsActive(false)
    }

    const nextTrack = ()=>{
        if(track_index < music_list.length - 1 && isRandom === false){
            track_index += 1;
        }else if(track_index < music_list.length - 1 && isRandom === true){
            let random_index = Number.parseInt(Math.random() * music_list.length);
            track_index = random_index;
        }else{
            track_index = 0;
        }
        loadTrack(track_index);
        playTrack();
    }

    const prevTrack = ()=>{

    }

    const playAllTracks = () =>{

    }

    const stopTrack = ()=>{
        audioRef.currentTime = 0
    }

    return (
        <div className='p-1 bg-transparent'>
            <audio src={url} ref={audioRef}/>

            <div className='flex flex-col items-center mt-9'>
                <TrackArt
                    thumbnail={thumbnail}
                    title={title}
                    active={isActive}
                />

                <div className='text-center p-2 m-0'>
                    {title}
                </div>

                <ProgressBar
                    active={isActive}
                    paused={isPaused}
                    time={time}
                />  

                <div className='flex items-center'>
                    <div
                        className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                    >
                        <BackwardIcon width={50} className="w-full" />
                    </div>

                    {
                        isActive && isPaused == false ? (
                            <div
                                className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                                onClick={playTrack}
                            >
                                <PlayIcon
                                    width={50}
                                    className="w-full p-0 m-0"
                                />
                            </div>
                        ) : (
                            <div
                                className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                                onClick={pauseTrack}
                            >
                                <PauseIcon width={50} className="w-full" />
                            </div>
                        ) 
                    }

                    <div
                        className='w-9 h-9 flex items-center cursor-pointer p-2 active:scale-90'
                        onClick={nextTrack}
                    >
                        <ForwardIcon width={50} className="w-full" />
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default AudioPlayer
