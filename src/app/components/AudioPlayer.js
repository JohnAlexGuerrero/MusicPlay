import React, { useEffect, useRef, useState } from 'react'

import PlayIcon from './icons/PlayIcons'
import PauseIcon from './icons/PauseIcons'
import ForwardIcon from './icons/ForwardIcons'
import BackwardIcon from './icons/BackwardIcons'
import TrackArt from './TrackArt'
import ProgressBar from './ProgressBar'

import { data } from '../api/data'

const AudioPlayer = () => {
    
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [listSong, setListSong] = useState([])

    const audioRef = useRef()

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [album, setAlbum] = useState('')
    const [time, setTime] = useState(0)

    useEffect(()=>{
        // setUrl(props.thumbnail)
        // setAuthor(props.artist)
        // setTitle(props.title)
        // setThumbnail(props.thumbnail)
        // setAlbum(props.album)
        // setTime(props.time) 

        const getMusic = ()=>{
          data.forEach(item =>{
            listSong.push(item)
          })
        }
    
        getMusic()
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

    return (
        <div className='p-1 border-white bg-white rounded-lg shadow-2xl w-{180} '>
            <audio src={url} ref={audioRef}/>

            <div className='flex items-center'>
                <TrackArt
                    thumbnail={thumbnail}
                    title={title}
                    active={isActive}
                />

                <div className='flex flex-col'>
                    <span className='m-0 text-xl font-bold'>
                        {title}
                    </span>
                    <span className='m-0 text-base font-medium text-red-600'>
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
                        onClick={nextTrack}
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
