import React from 'react'

function FeatureCard({ img, title, des }) {
    return (
        <div className="flex items-start gap-5">
            <img src={img} className='pt-2 w-14' alt="" />
            <div>
                <h5 className='text-white font-semibold text-xl'>

                    {title}
                </h5>
                <p className='mt-3'>{des}
                </p>
            </div>

        </div>
    )
}

export default FeatureCard