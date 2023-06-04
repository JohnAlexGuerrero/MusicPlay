import React from "react"

const TrackArt = ({props, active}) => {

  return (
    <div
        className='mx-1 h-32 w-32 border bg-cover bg-center rounded-full shadow-2xl p-1 '
    >
      <img 
        src={props.img}
        alt={props.name}
        width={100}
        className={active ? "w-full rounded-full animate-spin-slow" : "w-full rounded-full " }
      />
    </div>
  )
}

export default TrackArt
