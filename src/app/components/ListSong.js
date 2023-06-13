import React, { useEffect, useState } from 'react'
import { data } from '../api/data'

import MenuIcons from './icons/MenuIcons'
import PlayIcon from '../components/icons/PlayIcons'

import AlbumArt from './AlbumArt'

const ListSong = ({handleChoice, list}) => {

    // const [list_, setList_] = useState([])

    useEffect(() =>{

    }, [])


  return (
    <div className='bg-transparent m-0'>
        {/* <div className='m-0 p-0'>
            <h1 className='text-white text-5xl'>Mix diario 3</h1>
            <p className='text-white text-sm'>DE SPOTIFY. {list.length} CANCIONES. 0 SEGUIDORES</p>
        </div> */}
        <ul className='w-full max-h-96 overflow-y-scroll p-0 mt-10'>
            { 
                list.map((item) => (
                        <li 
                            key={item.id}
                            className='flex cursor-pointer p-2 w-full justify-start items-center rounded '
                            onClick={() => handleChoice(item)}
                        >
                            <AlbumArt item={item} />
                            {/* <div className='font-light mr-4'>
                                { false ?
                                    (
                                        <PlayIcon width={20} className="rounded-full border border-slate-900 p-1 w-34 h-34"/>
                                    ) 
                                    : item.id < 10 ? '0'+ item.id : item.id 
                                }

                            </div> */}
                            {/* <div className=''>
                                <p className="m-0 font-extrabold font-size-base ">{item.title}</p>
                                <p className='m-0 font-size-sx text-slate-400'>
                                    {item.artist}
                                    -
                                    {Math.floor(item.duration / 60) < 10 ? '0' + Math.floor(item.duration / 60) : Math.floor(item.duration / 60)}
                                    :
                                    {(item.duration % 60) < 10 ? '0' + (item.duration % 60) : (item.duration % 60)}
                                </p>
                            </div> */}
                            {/* <div className='w-34 h-34'>
                                < MenuIcons />
                            </div> */}
                        </li>
                    )
                )
            }
            
        </ul>
    </div>
  )
}

export default ListSong