import { Icon } from '@iconify/react'
import React from 'react'

function TeamCard({ info }) {
    return (
        <div className='teamCard'>
                <img  src={info.img} alt="" className='h-[220px] w-[220px]'/>
            <h3 className='lg:text-2xl text-xl font-semibold leading-tight mt-5 text-white text-center'>
                {info.name}
            </h3>
            <p className='text-sm lg:text-base text-center'>
                {info.location}
            </p>
        </div>
    )
}

export default TeamCard
