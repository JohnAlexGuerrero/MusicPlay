import React, { useEffect, useState } from 'react'

const AlbumArt = ({item, active}) => {
      const [image, setImage] = useState('')
      const [artist, setArtist] = useState('')
      const [isActive, setIsActive] = useState(false)

      const handleShow = ()=>{
        setIsActive(!isActive)
      }

      const handleNotShow = ()=>{
        setIsActive(!isActive)
      }

      useEffect(()=>{
        setImage(item.thumbnail)
        setArtist(item.artist)

      },[active])

  return (
    <div className='p-0 flex w-full ' onMouseEnter={handleShow} onMouseOut={handleShow}>
      <img src={'images/' + image} alt={item.title} className='rounded-l w-20' />
      <div className={isActive ? 'bg-white flex flex-col p-1 items-start shadow-2xl':'hidden'}>
        <span className='m-0 text-base font-medium text-black'>
          {item.artist}
        </span>
        <span className='m-0 text-x font-normal text-black'>
          {item.title}
        </span>
        <small className='text-black'>
          {'<' + item.album + '> ' + item.published_date}
        </small>
      </div>
      
    </div>
  )
}

export default AlbumArt
