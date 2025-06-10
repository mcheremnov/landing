import Link from 'next/link'

export const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center p-16 bg-[#e0e0e0] text-[#063833]" >
            <h2 className="text-4xl font-bold mb-4">Empowering Digital Innovation</h2>
            <p className="text-lg max-w-xl">
                Cutting-edge solutions designed for modern businesses.
            </p>
            <Link
                href="#contact"
                className="mt-6 px-6 py-3 bg-[#EAEFEF] text-[#333446] font-semibold rounded-lg shadow-md hover:bg-[#BCC5D3]"
            >
                Get Started
            </Link>
        </section>
    )
}