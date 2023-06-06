import React, { useEffect, useState } from 'react'
import { data } from '../api/data'

const ListSong = () => {

    const [list_, setList_] = useState([])

    useEffect(() =>{
        let list = []
        const getMusic = ()=>{
            data.forEach(item =>{
              list.push(item)
            })

            return list
          }
      
        setList_(getMusic())

    }, [])
    console.log(list_)
  return (
    <div className='bg-white mt-3'>
        <ul className='w-full max-h-96 overflow-y-scroll p-2'>
            { 
                list_.map((item) => (
                        <li 
                            key={item.id}
                            className='flex cursor-pointer p-2 justify-between items-center'
                        >
                            <div className='font-light'>{item.id < 10 ? '0'+ item.id : item.id}</div>
                            <div className=''>
                                <p className="m-0 font-extrabold font-size-base ">{item.title}</p>
                                <p className='m-0 font-size-sx text-slate-400'>{item.artist} - 4:32</p>
                            </div>
                            <div className='w-34 h-34 border'>menu</div>
                        </li>
                    )
                )
            }
            
        </ul>
    </div>
  )
}

export default ListSong