import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TambahBarang({ barangList }) {
    const { data, setData, post, reset, errors } = useForm({
        nama_barang: "",
        harga: "",
        gambar: null,
        category_id: "",
    });

    const [warnings, setWarnings] = useState({});

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type !== "image/jpeg") {
            setWarnings((prev) => ({
                ...prev,
                gambar: "File harus berformat .jpg",
            }));
            setData("gambar", null);
        } else {
            setWarnings((prev) => ({
                ...prev,
                gambar: "",
            }));
            setData("gambar", file);
        }
    };

    const validateForm = () => {
        const newWarnings = {};
        if (!data.nama_barang.trim()) {
            newWarnings.nama_barang = "Nama barang tidak boleh kosong.";
        }
        if (!data.harga || data.harga <= 0) {
            newWarnings.harga = "Harga barang harus lebih dari 0.";
        }
        if (!data.gambar) {
            newWarnings.gambar = "Silakan upload gambar barang.";
        }
        if (!data.category_id) {
            newWarnings.category_id = "Kategori ID tidak boleh kosong.";
        }
        setWarnings(newWarnings);
        return Object.keys(newWarnings).length === 0;
    };

    const handleTambahBarang = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        post(route("barang.store"), {
            onSuccess: () => {
                reset();
                setWarnings({});
            },
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Barang
                </h2>
            }
        >
            <Head title="Tambah Barang" />

            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4">
                    Form Tambah Barang
                </h3>
                <form
                    onSubmit={handleTambahBarang}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <div>
                        <label className="block mb-2">Nama Barang:</label>
                        <input
                            type="text"
                            value={data.nama_barang}
                            onChange={(e) =>
                                setData("nama_barang", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Masukkan nama barang"
                        />
                        {errors.nama_barang && (
                            <div className="text-red-600">
                                {errors.nama_barang}
                            </div>
                        )}
                        {warnings.nama_barang && (
                            <div className="text-orange-500">
                                {warnings.nama_barang}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2">Harga Barang:</label>
                        <input
                            type="number"
                            value={data.harga}
                            onChange={(e) => setData("harga", e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Masukkan harga barang"
                        />
                        {errors.harga && (
                            <div className="text-red-600">{errors.harga}</div>
                        )}
                        {warnings.harga && (
                            <div className="text-orange-500">
                                {warnings.harga}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2">
                            Upload Gambar (.jpg):
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".jpg"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.gambar && (
                            <div className="text-red-600">{errors.gambar}</div>
                        )}
                        {warnings.gambar && (
                            <div className="text-orange-500">
                                {warnings.gambar}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2">Kategori ID:</label>
                        <input
                            type="number"
                            value={data.category_id}
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Masukkan kategori ID"
                        />
                        {errors.category_id && (
                            <div className="text-red-600">
                                {errors.category_id}
                            </div>
                        )}
                        {warnings.category_id && (
                            <div className="text-orange-500">
                                {warnings.category_id}
                            </div>
                        )}
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Tambah Barang
                        </button>
                    </div>
                </form>

                <h3 className="text-lg font-semibold mt-8">Daftar Barang</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {barangList.map((barang) => (
                        <div
                            key={barang.id}
                            className="border rounded-md p-4 shadow-md"
                        >
                            <img
                                src={barang.gambar}
                                alt={barang.nama_barang}
                                className="w-full h-40 object-cover mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">
                                {barang.nama_barang}
                            </h2>
                            <p className="text-gray-600">
                                Harga: Rp {barang.harga}
                            </p>
                            <p className="text-gray-600 mt-2">
                                Kategori ID: {barang.category_id}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
