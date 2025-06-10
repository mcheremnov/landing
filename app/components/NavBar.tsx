export const NavBar = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-[#7F8CAA] shadow-md">
            <h1 className="text-2xl font-bold text-[#EAEFEF]">Software Agency</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/about" className="text-[#EAEFEF] hover:text-[#333446]">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="text-[#EAEFEF] hover:text-[#333446]">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-[#EAEFEF] hover:text-[#333446]">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}