'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
function NavMenu() {
    const [open, setOpen] = useState(false)
    return (
        <div className="container "> {/* Reduced top spacing */}
    <div className="flex justify-between items-center h-[80px]">
        {/* Logo */}
        <Link href={"/"} className='h-[180px] w-[180px] ' style={{aspectRatio:3/5}}>
            <img src="/intview_logo/intview_logo-2.png" alt="" className=" w-[180px] h-[180px] object-cover p-0 gap-0 mt-0" style={{ aspectRatio: "3/5" }}/> {/* Slightly smaller */}
        </Link>

        {/* Nav Menu */}
        <nav className={"navMenu " + (open ? "!flex" : "")}>
            <ul className="flex flex-col lg:flex-row items-center text-white gap-28 text-xl" > {/* Reduced gap */}
                {/* <li><Link href="/pricing">Pricing</Link></li> */}
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                {/* <li><Link href="/login">Log in</Link></li> */}
            </ul>

            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="closeBtn lg:!hidden">
                <Icon icon="humbleicons:times" />
            </button>
        </nav>

        {/* Cart & Shop (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-12"> {/* Hidden on small screens */}
            <Link href="/cart" className="text-white ">
                <img src="/hero_section/Icons-11.png" alt="cart" height={40} width={40}></img>
            </Link>
            <Link href="/contact" className="btn">
                Shop
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(true)} className="navBtn lg:!hidden">
            <Icon icon="material-symbols:menu-rounded" />
        </button>
    </div>
</div>



    )
}

export default NavMenu