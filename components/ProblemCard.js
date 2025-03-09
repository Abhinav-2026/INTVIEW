import { Icon } from '@iconify/react'
import React from 'react'

function ProblemCard({ title, problem ,solution}) {
    return (
        <div className="crd p-3 lg:p-6 border border-neutral-700 bg-[#1E1F31]">
            <p className="title text-white font-Plus_Jakarta_Sans mt-2">
                 {title}
            </p>
           <p>{problem}</p>
           <p>{solution}</p>
        </div>
    )
}

export default ProblemCard