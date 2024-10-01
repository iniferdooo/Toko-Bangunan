<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_barang',
        'harga',
        'gambar',
        'category_id'
    ];

    public function barangs()
    {
        return $this->hasMany(Barang::class, 'category_id');
    }
}
