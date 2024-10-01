import { router, usePage } from "@inertiajs/react";
import "flowbite";

export default function Navbar() {
    const { url } = usePage(); // Get the current URL

    return (
        <nav className="bg-gradient-to-r from-gray-500 to-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button
                    type="button"
                    onClick={() => {
                        router.get("/");
                    }}
                    className="text-white flex gap-1 bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-left"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    kembali
                </button>
                <button
                    data-collapse-toggle="navbar-multi-level"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-multi-level"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-multi-level"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="/"
                                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white ${
                                    url === "/"
                                        ? "bg-blue-700 text-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 md:text-blue-700 dark:text-blue-500"
                                        : "md:text-blue-700"
                                }`}
                                aria-current={
                                    url === "/cari-barang" ? "page" : undefined
                                }
                            >
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a
                                href="/About"
                                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white ${
                                    url === "/About"
                                        ? "bg-blue-700 text-white md:text-blue-700 dark:text-blue-500"
                                        : "md:text-blue-700"
                                }`}
                                aria-current={
                                    url === "/About" ? "page" : undefined
                                }
                            >
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Bantuan"
                                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white ${
                                    url === "/Bantuan"
                                        ? "bg-blue-700 text-white md:text-blue-700 dark:text-blue-500"
                                        : "md:text-blue-700"
                                }`}
                                aria-current={
                                    url === "/Bantuan" ? "page" : undefined
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-badge-help"
                                >
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <line x1="12" x2="12.01" y1="17" y2="17" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Keranjang"
                                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white ${
                                    url === "/Keranjang"
                                        ? "bg-blue-700 text-white md:text-blue-700 dark:text-blue-500"
                                        : "md:text-blue-700"
                                }`}
                                aria-current={
                                    url === "/Keranjang" ? "page" : undefined
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-shopping-basket"
                                >
                                    <path d="m15 11-1 9" />
                                    <path d="m19 11-4-7" />
                                    <path d="M2 11h20" />
                                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                                    <path d="M4.5 15.5h15" />
                                    <path d="m5 11 4-7" />
                                    <path d="m9 11 1 9" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
