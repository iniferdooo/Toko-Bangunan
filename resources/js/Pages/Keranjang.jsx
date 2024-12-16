import Navbar from "@/Components/tamu/navbar";
import { useState } from "react";
import axios from "axios";

export default function Keranjang({ keranjang, totalPrice }) {
    const [items, setItems] = useState(keranjang);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");

    // Fungsi untuk menghapus barang
    const handleRemove = async (id) => {
        try {
            // Mengirim permintaan DELETE ke backend
            await axios.post(`/keranjang/${id}`);

            // Memperbarui state setelah item dihapus
            const updatedItems = items.filter((item) => item.id !== id);
            setItems(updatedItems);
        } catch (error) {
            console.error("Error removing item from cart:", error);
            // Tampilkan pesan kesalahan jika diperlukan
        }
    };

    console.log(keranjang);

    // Fungsi untuk mengubah jumlah barang
    const handleQuantityChange = (id, newQuantity) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, jumlah: newQuantity } : item
            )
        );
    };

    // Fungsi untuk membuka modal pembayaran
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal pembayaran
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Fungsi untuk proses pembayaran
    
const handlePayment = async () => {
    try {
        // Prepare the request data from cart
        const requestData = {
            keranjang: items.map((item) => ({
                barang_id: item.barang.id,
                jumlah: item.jumlah,
                harga: item.barang.harga,
            })),
        };

        // Send POST request
        const response = await axios.post(
            route("keranjang.checkout"),
            requestData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json", // Ensure server knows to send JSON
                },
            }
        );

        // Check if the response is successful
        if (response.status === 200) {
            console.log("Checkout completed:", response);
        } else {
            console.error("Error during checkout:", response);
        }
    } catch (error) {
        console.error("Checkout failed:", error);
    }
};



    return (
        <div>
            <Navbar />

            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                    Keranjang Belanja
                </h1>

                <div className="bg-white shadow-md rounded-lg p-6">
                    {items.length === 0 ? (
                        <p className="text-center text-gray-500">
                            Keranjang Anda kosong.
                        </p>
                    ) : (
                        <div>
                            {/* List Items */}
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b py-4"
                                >
                                    <img
                                        src={`/${item.barang.gambar}`}
                                        alt={item.barang.nama_barang}
                                        className="w-24 h-24 rounded-lg"
                                    />
                                    <div className="flex-1 ml-4">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {item.barang.nama_barang}
                                        </h2>
                                        <div className="flex items-center mt-2">
                                            <span className="text-gray-600 mr-4">
                                                Rp.{" "}
                                                {item.barang.harga.toLocaleString()}
                                            </span>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.jumlah}
                                                onChange={(e) =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        Math.max(
                                                            1,
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    )
                                                }
                                                className="w-16 text-center border rounded-lg py-1 px-2 text-gray-800"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-red-500 hover:text-red-700 font-bold"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            ))}

                            {/* Total Harga */}
                            <div className="flex justify-between items-center mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    Total Harga:
                                </h2>
                                <span className="text-2xl font-bold text-gray-900">
                                    Rp. {totalPrice.toLocaleString()}
                                </span>
                            </div>

                            {/* Button to Open Modal */}
                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={openModal}
                                    className="bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg"
                                >
                                    Lanjutkan ke Pembayaran
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Detail Pembayaran
                        </h3>
                        <div className="mb-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center mb-2"
                                >
                                    <span className="text-gray-800">
                                        {item.barang.nama_barang} x{" "}
                                        {item.jumlah}
                                    </span>
                                    <span className="text-gray-900">
                                        Rp.{" "}
                                        {(
                                            item.jumlah * item.barang.harga
                                        ).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-2 flex justify-between items-center">
                            <h4 className="text-lg font-semibold text-gray-800">
                                Total Harga:
                            </h4>
                            <span className="text-lg font-bold text-gray-900">
                                Rp. {totalPrice.toLocaleString()}
                            </span>
                        </div>

                        {/* Payment Method Dropdown */}
                        <div className="mt-4">
                            <label
                                htmlFor="payment-method"
                                className="block text-gray-800 mb-2"
                            >
                                Pilih Metode Pembayaran:
                            </label>
                            <select
                                id="payment-method"
                                value={paymentMethod}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                                className="w-full p-2 border rounded-lg"
                            >
                                <option value="">-- Pilih --</option>
                                <option value="bca">Bank BCA</option>
                                <option value="mandiri">Bank Mandiri</option>
                                <option value="bri">Bank BRI</option>
                            </select>
                        </div>

                        {/* Bayar Button */}
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handlePayment}
                                className="bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg"
                            >
                                Bayar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
