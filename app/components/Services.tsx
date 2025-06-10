export const Services = () => {
    return (
        <section id="services" className="p-12 text-center bg-[#8ba29a] text-[#063833]">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
                We offer a range of software solutions tailored to your needs. Whether you&apos;re looking to
                develop custom applications, scale your infrastructure, or enhance digital presence—we&apos;ve got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="p-6 bg-[#e0e0e0] rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
                    <p className="text-lg">Responsive, scalable websites designed for performance and user engagement.</p>
                </div>
                <div className="p-6 bg-[#e0e0e0] rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">Mobile Apps</h3>
                    <p className="text-lg">Seamless applications for iOS & Android to drive mobile innovation.</p>
                </div>
                <div className="p-6 bg-[#e0e0e0] rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
                    <p className="text-lg">Robust cloud infrastructure for scalability, security, and efficiency.</p>
                </div>
                <div className="p-6 bg-[#e0e0e0] rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
                    <p className="text-lg">Engaging and intuitive designs that enhance user experience.</p>
                </div>
                <div className="p-6 bg-[#e0e0e0] rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">AI & Automation</h3>
                    <p className="text-lg">Integrate AI-powered automation to optimize workflows and productivity.</p>
                </div>
                <div className="p-6 bg-[#e0e0e0] rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">E-commerce Development</h3>
                    <p className="text-lg">Custom e-commerce platforms for seamless online transactions.</p>
                </div>
            </div>
        </section>
    )
}