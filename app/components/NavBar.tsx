'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import { FiMenu, FiX } from "react-icons/fi";
import { GiHamburgerMenu } from 'react-icons/gi'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    return (
        <header className="flex justify-between items-center p-6 bg-[#e0e0e0] fixed w-full top-0 left-0">
            <Link href="/">
                <Image src="./logo.svg" alt="Software Agency" width={200} height={100} />
            </Link>
            <nav>
                <ul className="hidden sm:flex space-x-4">
                    <li className="py-2">
                        <Link href="/about" className="text-[#063833] hover:text-[#b3c5c1]">About</Link>
                    </li>
                    <li className="py-2">
                        <Link href="/services" className="text-[#063833] hover:text-[#b3c5c1]">Services</Link>
                    </li>
                    <li className="py-2">
                        <Link href="/contact" className="text-[#063833] hover:text-[#b3c5c1]">Contact</Link>
                    </li>
                    <li>
                        <button
                            className="border-2 border-[#063833] text-[#063833] px-6 py-2 rounded-lg hover:bg-[#063833] hover:text-white transition"
                            onClick={() => router.push("/login")}
                        >
                            Login
                        </button>
                    </li>
                </ul>
            </nav>

            <button
                className="sm:hidden text-[#063833] focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <GiHamburgerMenu size={28} /> : <GiHamburgerMenu size={28} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#e0e0e0] p-6 shadow-md w-full flex flex-col items-center space-y-4">                    <Link href="/about" className="text-[#063833] hover:text-[#b3c5c1]">About</Link>
                    <Link href="/services" className="text-[#063833] hover:text-[#b3c5c1]">Services</Link>
                    <Link href="/contact" className="text-[#063833] hover:text-[#b3c5c1]">Contact</Link>
                    <button
                        className="border-2 border-[#063833] text-[#063833] px-6 py-2 rounded-lg hover:bg-[#063833] hover:text-white transition"
                        onClick={() => router.push("/login")}
                    >
                        Login
                    </button>
                </div>
            )}
        </header>
    )
}