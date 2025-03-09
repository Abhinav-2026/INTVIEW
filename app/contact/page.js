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
                            <h5 className='text-white uppercase font-medium text-base'>
                                Contact Us
                            </h5>
                           
                            <h2 className='text-white mb-10 lg:mb-1 text-3xl lg:text-6xl mt-4 font-bold'>
                               Get in Touch 
                            </h2>
                            <h2 className='text-white mb-10 lg:mb-1 text-3xl lg:text-6xl mt-4 font-bold'>
                               with
                               <span className='text-blue-900'> INTVIEW</span>  
                            </h2>
                            <img src="/img/img_15.jpg" className='w-full hidden lg:block' alt="" />
                        </div>
                        <div className='bg-[#0D111A] lg:-ml-28 p-8 lg:p-20 lg:col-span-2'>
                            {/* form */}
                            <form action="">
                                <p className='desc mb-4'>We'd love to hear from you!  </p>
                                <div className="flex flex-col gap-10 text-2xl">
                                    <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white '>
                                        <Icon icon="si:user-line" className='text-neutral-500 text-2xl' />
                                        <input className=' !bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Name' type="text" />
                                    </div>
                                    <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white '>

                                        <Icon icon="ph:phone" className='text-neutral-500 text-2xl' />
                                        <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Phone' type="tel" />
                                    </div>
                                    <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white '>
                                        <Icon icon="clarity:email-line" className='text-neutral-500 text-2xl' />
                                        <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Email Address' type="email" />
                                    </div>
                                    <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white '>
                                        <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Company' type="text" />
                                    </div>
                                    <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white '>
                                        <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='No of employees' type="number" />
                                    </div>
                                    <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white '>
                                        <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='State' type="text" />
                                    </div>
                                    <div className='flex pb-1.5 items-center border-b border-neutral-700 hover:border-white '>
                                        <input className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='Country' type="text" />
                                    </div>
                                    <div className='flex pb-1.5 items-start border-b border-neutral-700 hover:border-white '>
                                        <Icon icon="proicons:info" className='text-neutral-500 mt-2 text-2xl' />
                                        <textarea className='!bg-transparent block w-full outline-none text-white placeholder:text-neutral-500 p-2 pl-4' placeholder='How can we help you? Feel free to get in touch!' type="text" >
                                        </textarea>
                                    </div>
                                    <div>

                                        <button className='btn !bg-[#5ec900] !border-[#5ec900] hover:!bg-[#5ec900]'>
                                            <span className='flex items-center gap-2  leading-none'>
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
    <div className="grid lg:grid-cols-3 gap-10 text-center">
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
      <div className="crd flex flex-col items-center gap-4">
        <div className="bgTxt flex items-center justify-center w-12 h-12 text-xl">
          <HiBuildingOffice2 />
        </div>
        <p className="txt text-lg font-medium">
          785 15th Street, Office 478 Berlin, De 81566
        </p>
      </div>

      {/* Email */}
      <div className="crd flex flex-col items-center gap-4">
        <div className="bgTxt flex items-center justify-center w-12 h-12 text-xl">
          <MdOutlineMail />
        </div>
        <a href="mailto:info@example.com" className="txt text-lg font-medium">
          info@example.com
        </a>
      </div>
    </div>
  </div>
</section>

        </>

    )
}

export default page