import React from 'react'

function CategoryCard({ title, img, des, show }) {
    return (
        <div style={{
            display: show ? "block" : "none"
        }} className='p-2 bg-white rounded-lg'>
            <img src={img} alt="" className="w-full rounded-lg" />
            <h4 className='text-center text-lg lg:text-xl !font-medium mt-3'>{title}</h4>
            <p className='text-center text-xs mt-0.5'>{des}</p>
        </div>
    )
}

export default CategoryCard