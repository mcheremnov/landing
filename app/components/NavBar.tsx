'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export const NavBar = () => {

    const router = useRouter()
    return (
        <header className="flex justify-between items-center p-6 bg-[#e0e0e0] shadow-md">
            <Link href="/">
                <Image src="./logo.svg" alt="Software Agency" width={200} height={100} />
            </Link>
            <nav>
                <ul className="flex space-x-4">
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
        </header>
    )
}