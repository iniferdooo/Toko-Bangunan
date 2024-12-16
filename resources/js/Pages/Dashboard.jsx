import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    FiPackage,
    FiShoppingCart,
    FiUsers,
    FiDollarSign,
    FiBell,
    FiUser,
} from "react-icons/fi";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="flex h-screen bg-gray-50">
                {/* Main Content */}
                <main className="flex-1 p-8 space-y-6">
                    {/* Header */}
                    <header className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-700">
                            Dashboard
                        </h1>
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 border rounded shadow-sm focus:ring focus:ring-blue-300"
                            />
                            <button className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                                <FiBell size={18} />
                            </button>
                            <button className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                                <FiUser size={18} />
                            </button>
                        </div>
                    </header>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Jumlah Produk",
                                value: "120",
                                icon: <FiPackage size={28} />,
                            },
                            {
                                title: "Pesanan Baru",
                                value: "15",
                                icon: <FiShoppingCart size={28} />,
                            },
                            {
                                title: "Pendapatan Bulanan",
                                value: "Rp 20,000,000",
                                icon: <FiDollarSign size={28} />,
                            },
                            {
                                title: "Pengguna Terdaftar",
                                value: "500",
                                icon: <FiUsers size={28} />,
                            },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-blue-600">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-700">
                                            {card.title}
                                        </h2>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {card.value}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts and Tables Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Grafik Penjualan Placeholder */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">
                                Grafik Penjualan
                            </h3>
                            <div className="h-40 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* Tabel Pesanan Terbaru */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">
                                Pesanan Terbaru
                            </h3>
                            <table className="w-full text-left text-gray-700">
                                <thead>
                                    <tr className="border-b">
                                        <th className="p-2">Nomor Pesanan</th>
                                        <th className="p-2">Nama Pelanggan</th>
                                        <th className="p-2">Total</th>
                                        <th className="p-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            id: "#00123",
                                            customer: "Budi",
                                            total: "Rp 1,200,000",
                                            status: "Selesai",
                                        },
                                        {
                                            id: "#00124",
                                            customer: "Ani",
                                            total: "Rp 800,000",
                                            status: "Diproses",
                                        },
                                    ].map((order, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100 transition"
                                        >
                                            <td className="p-2">{order.id}</td>
                                            <td className="p-2">
                                                {order.customer}
                                            </td>
                                            <td className="p-2">
                                                {order.total}
                                            </td>
                                            <td
                                                className={`p-2 font-semibold ${
                                                    order.status === "Selesai"
                                                        ? "text-green-500"
                                                        : "text-yellow-500"
                                                }`}
                                            >
                                                {order.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
