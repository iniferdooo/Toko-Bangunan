import Navbar from "@/Components/tamu/navbar";

export default function About() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div class="bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 text-white py-20">
                <div class="container mx-auto text-center">
                    <h1 class="text-5xl font-bold mb-6">Tentang Kami</h1>
                    <p class="text-lg mb-6">
                        Kami adalah toko bangunan yang menyediakan banyak barang
                        dengan harga yang murah.
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div class="container mx-auto py-16 px-6">
                <div class="flex flex-col lg:flex-row lg:space-x-10">
                    {/* About Image */}
                    <div class="lg:w-1/2 mb-8 lg:mb-0">
                        <img
                            src="/toko.jpg"
                            alt="Our Team"
                            class="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* About Content */}
                    <div class="lg:w-1/2">
                        <h2 class="text-3xl font-semibold text-gray-800 mb-6">
                            sejarah toko
                        </h2>
                        <p class="text-gray-600 mb-4">toko kami</p>
                        <p class="text-gray-600 mb-4">
                            Founded in 2020, we have been growing steadily and
                            working tirelessly to improve our services. From
                            humble beginnings, we have emerged as a key player
                            in our industry.
                        </p>
                    </div>
                </div>
            </div>

            {/* Google Maps and Address Section */}
            <div class="container mx-auto py-16 px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Google Maps */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.406158888695!2d144.9537353155046!3d-37.817209742634135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43ad34fb39%3A0x6f6a1f6181d8de9f!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1606284522693!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                            class="rounded-lg shadow-lg"
                        ></iframe>
                    </div>

                    {/* Address */}
                    <div class="flex flex-col justify-center">
                        <h3 class="text-3xl font-semibold text-gray-800 mb-4">
                            toko kami
                        </h3>
                        <p class="text-gray-600 mb-4">
                            <strong>Malang</strong>
                            <br />
                            Jalan sengkaling
                            <br />
                            Mulyoagung
                            <br />
                            Dau
                        </p>
                        <p class="text-gray-600 mb-4">
                            <strong>Email:</strong> FerdoBS@gmail.com
                            <br />
                            <strong>Phone:</strong> +62 456-7890-3233
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div class="bg-gray-100 py-16">
                <div class="container mx-auto text-center">
                    <h2 class="text-3xl font-semibold text-gray-800 mb-6">
                        Our Mission
                    </h2>
                    <p class="text-gray-600 mb-6">
                        To innovate and deliver solutions that make life better,
                        easier, and more efficient. We aim to create a lasting
                        impact through our dedication to excellence.
                    </p>
                    <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                        {/* Card 1 */}
                        <div class="bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 shadow-lg rounded-lg p-6 max-w-sm">
                            <h3 class="text-xl text-white font-semibold mb-2">
                                Innovation
                            </h3>
                            <p class="text-gray-200">
                                We are constantly pushing the envelope with
                                creative solutions and innovative approaches to
                                solve problems.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div class="bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 shadow-lg rounded-lg p-6 max-w-sm">
                            <h3 class="text-xl text-white font-semibold mb-2">
                                Collaboration
                            </h3>
                            <p class="text-gray-200">
                                Teamwork makes the dream work. We believe in the
                                power of collaboration to achieve great things.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div class="bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 shadow-lg rounded-lg p-6 max-w-sm">
                            <h3 class="text-xl text-white font-semibold mb-2">Growth</h3>
                            <p class="text-gray-200">
                                Personal and professional growth is at the core
                                of our company values, helping our team members
                                thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer class="bg-gray-800 text-white py-8 text-center">
                <p>&copy; 2Ferdo Bangun Sejahtera</p>
            </footer>
        </div>
    );
}
