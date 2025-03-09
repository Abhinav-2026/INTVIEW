'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
function NavMenu() {
    const [open, setOpen] = useState(false)
    return (
        <div className="container py-1"> {/* Reduced top spacing */}
    <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
            <img src="/intview_logo/intview_logo-2.png" alt="" className="w-36 h-36 p-0 gap-0 mt-0"/> {/* Slightly smaller */}
        </Link>

        {/* Nav Menu */}
        <nav className={"navMenu " + (open ? "!flex" : "")}>
            <ul className="flex flex-col lg:flex-row items-center text-white gap-16 text-xl" > {/* Reduced gap */}
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/login">Log in</Link></li>
            </ul>

            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="closeBtn lg:!hidden">
                <Icon icon="humbleicons:times" />
            </button>
        </nav>

        {/* Cart & Shop (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-3"> {/* Hidden on small screens */}
            <Link href="/cart" className="text-white">
                <BsCart2 size={24} />
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