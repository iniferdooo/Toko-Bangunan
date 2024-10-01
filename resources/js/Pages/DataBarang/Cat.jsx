import { useState } from "react";
import { Popover } from "@headlessui/react";
import { router } from "@inertiajs/react";

export default function Cat({ cat }) {
    const [jumlah, setJumlah] = useState(1);
    const [totalHarga, setTotalHarga] = useState(null)
    // Function to handle "Tambahkan" button click
    const handleBeli = async (barangId, jumlah) => {
        router.post(
            "/keranjang",
            {
                barang_id: barangId,
                jumlah: jumlah,
            },
            {
                onSuccess: (response) => {
                    // Handle successful response here
                    alert("Barang berhasil ditambahkan ke keranjang!");
                    Inertia.visit("/keranjang"); // Navigate to the cart page
                },
                onError: (error) => {
                    // Handle error case
                    alert("Gagal menambahkan barang ke keranjang.");
                    console.error(error);
                },
            }
        );
    };

    return (
        <div className="bg-gradient-to-r from-gray-500 to-gray-200 dark:bg-gray-900">
            <a
                href="cari-barang"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-12 mt-12"
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
                Kembali
            </a>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
                    Ada berbagai cat yang ada di toko kami
                </h1>

                <div className="flex gap-4 mt-28">
                    {cat &&
                        cat.barangs &&
                        cat.barangs.map((barang) => {
                            return (
                                <div
                                    key={barang.id}
                                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <a href="#">
                                        <img
                                            className="p-8 rounded-t-lg"
                                            src={`/${barang.gambar}`}
                                            alt="product image"
                                        />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                {barang.nama_barang}
                                            </h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                {[...Array(5)].map(
                                                    (_, index) => (
                                                        <svg
                                                            key={index}
                                                            className={`w-4 h-4 ${
                                                                index <
                                                                barang.rating
                                                                    ? "text-yellow-300"
                                                                    : "text-gray-600"
                                                            }`}
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                        >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                    )
                                                )}
                                            </div>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                                5.0
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                                Rp.{" "}
                                                {barang.harga.toLocaleString()}
                                            </span>
                                            <Popover className="relative">
                                                <Popover.Button
                                                    onClick={() =>
                                                        setTotalHarga(
                                                            jumlah *
                                                                barang.harga
                                                        )
                                                    }
                                                    className="text-white bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    Beli
                                                </Popover.Button>
                                                <Popover.Panel className="absolute z-10 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                                                    <div className="mb-4">
                                                        <label
                                                            htmlFor="jumlah"
                                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                                        >
                                                            Jumlah
                                                        </label>
                                                        <input
                                                            id="jumlah"
                                                            type="number"
                                                            value={jumlah}
                                                            onChange={(e) => {
                                                                setJumlah(
                                                                    Math.max(
                                                                        1,
                                                                        parseInt(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                );
                                                            }}
                                                            className="w-full mt-1 block border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>
                                                    <p className="text-gray-900 dark:text-white">
                                                        Total Harga: Rp.{" "}
                                                        {totalHarga}
                                                    </p>
                                                    <button
                                                        onClick={() =>
                                                            handleBeli(
                                                                barang.id,
                                                                jumlah
                                                            )
                                                        }
                                                        className="mt-4 w-full bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                        Tambahkan
                                                    </button>
                                                </Popover.Panel>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
