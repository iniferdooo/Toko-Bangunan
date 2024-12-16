<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class TambahBarangTesting extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test halaman tambah barang dapat diakses.
     */
    public function test_tambah_barang_page_can_be_accessed()
    {
        $response = $this->get(route('barang.tambah')); // Sesuaikan dengan nama route Anda
        $response->assertStatus(200);
        $response->assertSee('Form Tambah Barang');
    }

    /**
     * Test form tambah barang berhasil menambah barang.
     */
    public function test_form_tambah_barang_saves_data_correctly()
    {
        $file = UploadedFile::fake()->image('barang.jpg');

        $response = $this->post(route('barang.store'), [
            'nama_barang' => 'Besi Beton',
            'harga' => 50000,
            'gambar' => $file,
            'category_id' => 1,
        ]);

        $response->assertRedirect(); // Pastikan ada redirect setelah sukses
        $this->assertDatabaseHas('barangs', [
            'nama_barang' => 'Besi Beton',
            'harga' => 50000,
            'category_id' => 1,
        ]);
    }

    /**
     * Test validasi form tambah barang gagal jika ada input yang tidak valid.
     */
    public function test_form_tambah_barang_validation_fails_with_invalid_data()
    {
        $response = $this->post(route('barang.store'), [
            'nama_barang' => '', // Kosong
            'harga' => -100, // Harga tidak valid
            'gambar' => null, // Gambar kosong
            'category_id' => null, // Kategori kosong
        ]);

        $response->assertSessionHasErrors([
            'nama_barang',
            'harga',
            'gambar',
            'category_id',
        ]);
    }
}
