import React, { useEffect, useRef } from "react"

const TrackArt = ({thumbnail, title, active}) => {
  const thumbnailRef = useRef()

  useEffect(()=>{
    thumbnailRef.current.className = active ? 'w-full rounded-full animate-spin-slow' : 'w-full rounded-full'
  },[active])

  return (
    <div
      className='mx-1 h-32 w-32 border bg-cover bg-center rounded-full shadow-2xl p-1 '
    >
      <img 
        src={'images/'+thumbnail}
        alt={title}
        width={100}
        className="w-full rounded-full"
        ref={thumbnailRef}
      />
    </div>
  )
}

export default TrackArt
