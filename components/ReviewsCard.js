import { Icon } from '@iconify/react'
import React from 'react'

function ReviewsCard({ name, position ,review}) {
    return (
        <div className="crd p-3 lg:p-6 border border-neutral-700 bg-[#1E1F31]">
            <p className="title text-white font-Plus_Jakarta_Sans mt-2">
                 {review}
            </p>
           <p>{name}</p>
           <p>{position}</p>
        </div>
    )
}

export default ReviewsCard