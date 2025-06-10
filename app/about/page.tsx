export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-[#333446] text-[#EAEFEF]">
            <section id="about" className="p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Who We Are?</h2>
                <p className="text-lg max-w-3xl mx-auto">
                    At <strong>Software Agency</strong>, we specialize in crafting cutting-edge digital solutions
                    tailored to businesses of all sizes. With a passion for innovation and a commitment to excellence,
                    we turn ideas into high-performing applications, websites, and scalable cloud infrastructures.
                </p>
            </section>
            <section id="mission" className="p-12 bg-[#7F8CAA] text-[#333446] text-center">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg max-w-3xl mx-auto">
                    Our mission is to empower businesses through technology. We aim to provide intuitive,
                    efficient, and powerful software solutions that enhance productivity and drive success.
                </p>
            </section>
            <section id="team" className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
                <p className="text-lg max-w-3xl mx-auto">
                    Our team consists of experienced developers, designers, and strategists dedicated to delivering
                    high-quality digital products. We bring creativity and technical expertise together to solve complex challenges.
                </p>
            </section>

            <section id="contact" className="p-12 bg-[#7F8CAA] text-[#333446] text-center">
                <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                <p className="text-lg max-w-3xl mx-auto mb-6">
                    Have a project in mind? Let&apos;s build something great together!
                    Reach out to us and let&apos;s discuss how we can turn your ideas into reality.
                </p>
                <a
                    href="/contact"
                    className="inline-block mt-6 px-6 py-4 bg-[#EAEFEF] text-[#333446] font-semibold rounded-lg shadow-md hover:bg-[#BCC5D3]"
                >
                    Contact Us
                </a>
            </section>

        </div>
    )
}