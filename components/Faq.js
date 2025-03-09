'use client'
import React, { useState } from 'react'

function Faq({ items }) {
    const [opened, setOpened] = useState(null)
   
    return (
        <div className='accordion'>

            {items.map((item, index) => (
                <div key={index} className='accordion-item py-3 lg:py-5 border-b border-gray-500'>
                    <div className='accordion-title cursor-pointer select-none text-white text-xl lg:text-2xl flex justify-between' onClick={() => setOpened(opened === index ? null : index)}>
                        <h2>{item.title}</h2>
                        <span>{opened === index ? '-' : '+'}</span>
                    </div>
                    <div className={`accordion-content pt-3 lg:pt-5  ${opened === index ? 'block' : 'hidden'}`}>
                        <p className=' lg:text-lg'>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Faq