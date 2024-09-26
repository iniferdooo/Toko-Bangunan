import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div>
                    <Navbar />
                </div>

                <div class="bg-center bg-no-repeat bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Ftokobangunansbb.com%2Ftoko-depo-bangunan-terdekat-surabaya%2F&psig=AOvVaw1VKcPAZG8uy3RC6Vl7vwGs&ust=1727443234878000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDY0NfZ4IgDFQAAAAAdAAAAABAJ')] bg-gray-700 bg-blend-multiply h-screen">
                    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            Ferdo Bangun Sejahtera
                        </h1>
                        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                            Menjual segala barang bangunan
                        </p>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a
                                href="cari-barang"
                                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            >
                                Cari Barang
                                <svg
                                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
