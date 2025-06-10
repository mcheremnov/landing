export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-[#e0e0e0] text-[#063833]">
            <section
                id="contact"
                className="h-screen flex flex-col justify-center items-center p-12 bg-[#e0e0e0] text-[#063833] mt-16"
            >
                <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
                <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-lg"><strong>Email:</strong> contact@softwareagency.com</p>
                        <p className="text-lg"><strong>Phone:</strong> +380 (48) 123-4567</p>
                        <p className="text-lg"><strong>Address:</strong> 11 Sofiivska Street, Odesa</p>
                    </div>
                    <div className="flex-1">
                        <iframe
                            className="w-96 h-64 rounded-lg shadow-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.1052938656344!2d30.728557667735497!3d46.49082152165119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631bf6881c023%3A0x1606fdd583775308!2sSofiivs'ka%20St%2C%2011%2C%20Odesa%2C%20Ukraine%2C%2065000!5e0!3m2!1sen!2sus!4v1749521872537!5m2!1sen!2sus"
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section id="faq" className="flex-grow bg-[#8ba29a] p-12 text-center">
                <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="max-w-3xl mx-auto text-lg">
                    <details className="mb-4">
                        <summary className="cursor-pointer font-semibold">What services do you offer?</summary>
                        <p className="mt-2 text-[#BCC5D3]">We specialize in web development, mobile apps, and cloud solutions.</p>
                    </details>
                    <details className="mb-4">
                        <summary className="cursor-pointer font-semibold">How do I get a quote?</summary>
                        <p className="mt-2 text-[#BCC5D3]">Just contact us via email or phone, and we’ll discuss your project requirements.</p>
                    </details>
                    <details className="mb-4">
                        <summary className="cursor-pointer font-semibold">Do you work with startups?</summary>
                        <p className="mt-2 text-[#BCC5D3]">Yes! We love collaborating with startups and bringing their ideas to life.</p>
                    </details>
                </div>
            </section>
        </div>

    )
}