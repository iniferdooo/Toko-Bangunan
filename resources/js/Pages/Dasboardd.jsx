import Navbar from "@/Components/tamu/navbar";

export default function Dashboardd() {
    return (
        <>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div>
                    <Navbar />
                </div>

                <div className="bg-center bg-no-repeat bg-[url('bg.jpg')] bg-cover bg-gray-700 bg-blend-multiply h-screen">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            Ferdo Bangun Sejahtera
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                            Menjual segala barang bangunan
                        </p>
                        <div className="flex flex-col space-y-4 gap-10 sm:flex-row sm:justify-center sm:space-y-0">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="/docs/images/blog/image-1.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <img src="/cat.jpg" alt="" width={130} />
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Cat
                                        </h5>
                                    </a>
                                    <a
                                        href={route("cat.index")}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Lihat
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="/docs/images/blog/image-1.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <img
                                        src="/keramik.png"
                                        alt=""
                                        width={130}
                                    />
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Keramik
                                        </h5>
                                    </a>
                                    <a
                                        href={route("keramik.index")}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Lihat
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="/docs/images/blog/image-1.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <img src="semen.jpg" alt="" width={130} />
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Semen
                                        </h5>
                                    </a>
                                    <a
                                        href={route("semen.index")}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Lihat
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
