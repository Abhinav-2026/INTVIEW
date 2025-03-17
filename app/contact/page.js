import { Icon } from '@iconify/react'
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
function page() {
    return (
        <>
            <section id='contactHero' className='pb-10 lg:pb-20 pt-20 lg:pt-32'>
  <div className="container">
    <div className="grid lg:grid-cols-5 items-start">
      <div className='lg:col-span-3'>
        <h5 className='text-white uppercase font-medium text-base'>Contact Us</h5>
        <h2 className='text-white mb-10 lg:mb-1 text-3xl lg:text-6xl mt-4 font-bold'>Get in Touch</h2>
        <h2 className='text-white mb-10 lg:mb-1 text-3xl lg:text-6xl mt-4 font-bold'>
          with <span className='text-blue-900'>INTVIEW</span>
        </h2>
        <img src="/img/img_15.jpg" className='w-full hidden lg:block' alt="" />
      </div>
      
      {/* Contact Form */}
      <div className='bg-[#0D111A] lg:-ml-28 p-8 lg:p-20 lg:col-span-2'>
        <form action="">
          <p className='desc mb-4'>We'd love to hear from you!</p>
          <div className="flex flex-col gap-10 text-2xl">

            {/* First Name */}
            <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white'>
              <Icon icon="si:user-line" className='text-neutral-500 text-2xl' />
              <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='First Name' type="text" />
            </div>

            {/* Last Name */}
            <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white'>
              <Icon icon="si:user-line" className='text-neutral-500 text-2xl' />
              <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Last Name' type="text" />
            </div>

            {/* Email Address */}
            <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white'>
              <Icon icon="clarity:email-line" className='text-neutral-500 text-2xl' />
              <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Email Address' type="email" />
            </div>

            {/* Phone */}
            <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white'>
              <Icon icon="ph:phone" className='text-neutral-500 text-2xl' />
              <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Phone' type="tel" />
            </div>

            {/* Company */}
            <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white'>
              <Icon icon="mdi:office-building-outline" className='text-neutral-500 text-2xl' />
              <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Company' type="text" />
            </div>

            {/* State */}
            <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white'>
              <Icon icon="mdi:map-marker-outline" className='text-neutral-500 text-2xl' />
              <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='State' type="text" />
            </div>

            {/* Country */}
            <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white'>
              <Icon icon="mdi:earth" className='text-neutral-500 text-2xl' />
              <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Country' type="text" />
            </div>

            {/* Message */}
            <div className='flex pb-1.5 items-start border-b border-neutral-700 hover:border-white'>
              <Icon icon="proicons:info" className='text-neutral-500 mt-2 text-2xl' />
              <textarea className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='How can we help you?'></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button className='btn !bg-[#5ec900] !border-[#5ec900] hover:!bg-[#5ec900]'>
                <span className='flex items-center gap-2 leading-none'>
                  <Icon icon="lucide:send" width="20" height="20" />
                  Send Message
                </span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</section>

            <section className="py-10 lg:py-20" id="contactCards">
  <div className="container">
    <div className="grid lg:grid-cols-2  text-center">
      {/* Phone */}
      <div className="crd flex flex-col items-center gap-4">
        <div className="bgTxt flex items-center justify-center w-12 h-12 text-xl">
          <BsTelephone />
        </div>
        <a href="#" className="txt text-lg font-medium">
          +1(800)123-4665
        </a>
      </div>

      {/* Address */}
      

      {/* Email */}
      <div className="crd flex flex-col items-center gap-4">
        <div className="bgTxt flex items-center justify-center w-12 h-12 text-xl">
          <MdOutlineMail />
        </div>
        <a href="mailto:korey@intview.io " className="txt text-lg font-medium">
        korey@intview.io 
        </a>
      </div>
    </div>
  </div>
</section>

        </>

    )
}

export default page