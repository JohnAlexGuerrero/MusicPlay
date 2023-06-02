import React from 'react'

const SliderBar = ({props}) => {
  return (
    <div className='my-1 h-30 bg-white ease-linear p-1'>
        <input type="range" min="1" max="100" value="0" class="w-full h-1" onchange="seekTo()" />
        <div class="flex justify-between my-1">
            <span className='text-xs text-slate-300'>00:00</span>
            <span className='text-xs text-slate-300'>00:00</span>
        </div>
    </div>
  )
}

export default SliderBar