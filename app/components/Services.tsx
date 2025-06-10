export const Services = () => {
    return (
        <section id="services" className="p-12 bg-[#333446] h-screen">
            <h3 className="text-3xl font-bold text-center text-[#EAEFEF] mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md text-center">
                    <h4 className="text-xl font-semibold text-[#EAEFEF]">Web Development</h4>
                    <p className="text-[#EAEFEF]">Create fast, responsive websites with cutting-edge tech.</p>
                </div>
                <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md text-center">
                    <h4 className="text-xl font-semibold text-[#EAEFEF]">Mobile Apps</h4>
                    <p className="text-[#EAEFEF]">Build seamless mobile applications for iOS & Android.</p>
                </div>
                <div className="p-6 bg-[#7F8CAA] rounded-lg shadow-md text-center">
                    <h4 className="text-xl font-semibold text-[#EAEFEF]">Cloud Solutions</h4>
                    <p className="text-[#EAEFEF]">Leverage cloud technology for efficiency & scalability.</p>
                </div>
            </div>
        </section>
    )
}