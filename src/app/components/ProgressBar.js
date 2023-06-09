
import React, { useEffect, useRef, useState } from 'react'

const ProgressBar = ({ active, paused, time }) => {

  const [timeLimit, setTimeLimit] = useState(0)
  const [timeMinutes, setTimeMinutes] = useState(0)
  const [timeSeconds, setTimeSeconds] = useState(0)
  const [maxBar, setMaxBar] = useState(0)
  const [bar, setBar] = useState(0)

  useEffect(() => {
    let interval = null;
    setTimeLimit(time)
    setMaxBar(time)

    if (active && paused === false) {

      interval = setInterval(() => {
        setTimeSeconds((time) => time + 1);
        setTimeLimit((time) => time - 1)
        setBar((i) => i + 1)
      }, 1000);
    } else {
      setTimeLimit(timeLimit - bar)
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, paused]);

  if (timeSeconds == 60) {
    setTimeMinutes(timeMinutes + 1)
    setTimeSeconds(0)
  }


  return (
    <div
      className="block my-0 h-30 bg-transparent ease-linear p-1"
    >
      <input
        type="range"
        min={0}
        max={maxBar}
        value={bar}
        className="w-full h-1"
      />
      <div className="flex justify-between my-1">
        <span className='text-xs text-slate-300'>
          {timeMinutes < 10 ? '0' + timeMinutes : timeMinutes}
          :
          {timeSeconds < 10 ? '0' + timeSeconds : timeSeconds}
        </span>
        <span className='text-xs text-slate-300'>
          {Math.floor(timeLimit / 60) < 10 ? '0' + Math.floor(timeLimit / 60) : '-' + Math.floor(timeLimit / 60)}
          :
          {(timeLimit % 60) < 10 ? '0' + (timeLimit % 60) : (timeLimit % 60)}
        </span>
      </div>
    </div>
  )
}

export default ProgressBar