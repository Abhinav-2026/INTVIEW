import React from 'react'
import Link from 'next/link';
function SolutionCard({ img, title ,desc,focus}) {
    return (
      <Link
      href="/"
      className="relative crd pt-10 pb-5 px-10 text-center bg-[#DAE8F1] flex flex-col items-center h-full min-h-[300px] justify-between"
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center opacity-15">
        <img className="w-40 h-40" src={img} alt="" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col flex-grow justify-between text-center">
        <h3 className="text-2xl font-bold mb-2 min-h-[50px]">{title}</h3>
        <p className="text-gray-700 min-h-[80px]">{desc}</p>
        <p className="text-gray-900 font-semibold mt-2 min-h-[40px]">
          <span className="font-bold">Focus:</span> {focus}
        </p>
      </div>
    </Link>
        
    )
}

export default SolutionCard