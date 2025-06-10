export default function Services() {
    return (
        <div className="flex flex-col min-h-screen bg-[#333446] text-[#EAEFEF]">
            <section id="services" className="p-12 text-center">
                <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                <p className="text-lg max-w-3xl mx-auto mb-8">
                    We offer a range of software solutions tailored to your needs. Whether you&apos;re looking to
                    develop custom applications, scale your infrastructure, or enhance digital presence—we&apos;ve got you covered.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
                        <p className="text-lg">Responsive, scalable websites designed for performance and user engagement.</p>
                    </div>
                    <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Mobile Apps</h3>
                        <p className="text-lg">Seamless applications for iOS & Android to drive mobile innovation.</p>
                    </div>
                    <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
                        <p className="text-lg">Robust cloud infrastructure for scalability, security, and efficiency.</p>
                    </div>
                    <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
                        <p className="text-lg">Engaging and intuitive designs that enhance user experience.</p>
                    </div>
                    <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">AI & Automation</h3>
                        <p className="text-lg">Integrate AI-powered automation to optimize workflows and productivity.</p>
                    </div>
                    <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">E-commerce Development</h3>
                        <p className="text-lg">Custom e-commerce platforms for seamless online transactions.</p>
                    </div>
                </div>
            </section>
            <section className="p-12 bg-[#7F8CAA] text-center">
                <h3 className="text-3xl font-bold mb-6">Let&apos;s Build Together</h3>
                <p className="text-lg max-w-3xl mx-auto mb-6">
                    Looking for a &ldquo;custom-built&ldquo; solution? Contact us to discuss your project and create something amazing.
                </p>
                <a
                    href="/contact"
                    className="px-6 py-4 bg-[#EAEFEF] text-[#333446] font-semibold rounded-lg shadow-md hover:bg-[#BCC5D3]"
                >
                    Get in Touch
                </a>
            </section>

        </div>
    )
}