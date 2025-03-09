import { Icon } from '@iconify/react'
import React from 'react'

function TeamCard({ info }) {
    return (
        <div className='teamCard'>
                <img className='w-[250px] h-[300px]' src={info.img} alt="" />
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