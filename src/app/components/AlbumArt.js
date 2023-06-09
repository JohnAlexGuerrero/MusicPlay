import React, { useEffect, useState } from 'react'

const AlbumArt = ({item, active}) => {
    const [image, setImage] = useState('')
    const [artist, setArtist] = useState('')

    useEffect(()=>{
        setImage(item.thumbnail)
        setArtist(item.artist)

    },[active])

  return (
    <div className='p-0 w-72 h-72'>
      <img src={'images/' + image} alt='' className='rounded-lg w-full' />
      {/* <p className='mt-2 text-sm'>{artist}</p> */}
    </div>
  )
}

export default AlbumArt
