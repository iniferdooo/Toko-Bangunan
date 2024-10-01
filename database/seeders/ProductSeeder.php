<?php

namespace Database\Seeders;

use App\Models\Barang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'nama_barang' => 'Nippon Paint',
                'harga' => 185000,
                'category_id' => 1, // Sesuaikan dengan kategori yang sesuai
                'gambar' => 'cat2.jpg',
            ],
            [
                'nama_barang' => 'Avitex',
                'harga' => 150000,
                'category_id' => 1,
                'gambar' => 'cat3.jpg',
            ],
            [
                'nama_barang' => 'Catylac',
                'harga' => 120000,
                'category_id' => 1,
                'gambar' => 'cat4.jpg',
            ],
                        [
                'nama_barang' => 'Semen Padang',
                'harga' => 40000,
                'category_id' => 3,
                'gambar' => 'padang.png',
            ],
                        [
                'nama_barang' => 'Semen Tiga Roda',
                'harga' => 48000,
                'category_id' => 3,
                'gambar' => 'tigaroda.jpg',
            ],
        ];

        foreach ($products as $product) {
            Barang::create($product);
        }
    }
}
