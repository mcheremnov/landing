export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-[#333446] text-[#EAEFEF]">
            <section id="contact" className="p-12 bg-[#7F8CAA] text-[#EAEFEF]">
                <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
                <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
                    {/* Contact Info */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-lg"><strong>Email:</strong> contact@softwareagency.com</p>
                        <p className="text-lg"><strong>Phone:</strong> +380 (48) 123-4567</p>
                        <p className="text-lg"><strong>Address:</strong> 11 Sofiivska Street, Odesa</p>
                    </div>

                    {/* Google Maps */}
                    <div className="flex-1">
                        <iframe
                            className="w-full h-64 rounded-lg shadow-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.1052938656344!2d30.728557667735497!3d46.49082152165119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631bf6881c023%3A0x1606fdd583775308!2sSofiivs&#39;ka%20St%2C%2011%2C%20Odesa%2C%20Odes&#39;ka%20oblast%2C%20Ukraine%2C%2065000!5e0!3m2!1sen!2sus!4v1749521872537!5m2!1sen!2sus"
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section id="faq" className="p-12 text-center">
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