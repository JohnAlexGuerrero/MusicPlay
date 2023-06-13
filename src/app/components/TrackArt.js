import React, { useEffect, useRef } from "react"

const TrackArt = ({thumbnail, title, active}) => {
  const thumbnailRef = useRef()

  useEffect(()=>{
    thumbnailRef.current.className = active ? 'w-full rounded-full animate-spin-slow' : 'w-full rounded-full'
  },[active])

  return (
    <div
      className='bg-transparent mx-1 border bg-center rounded-full shadow-2xl p-1 w-60 relative'
    >
      <img 
        src={'images/'+thumbnail}
        alt={title}
        width={100}
        className="w-full rounded-full bg-slate-300"
        ref={thumbnailRef}
      />
      <div className="bg-transparent w-20 h-20 border-8 border-black rounded-full absolute top-20 left-20 flex items-center p-3">
        <div className="bg-transparent border-8 border-yellow-800 w-10 h-10 rounded-full"></div>
      </div>
    </div>
  )
}

export default TrackArt
