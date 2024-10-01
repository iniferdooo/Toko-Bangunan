<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BantuanController;
use App\Http\Controllers\CariBarangController;
use App\Http\Controllers\CatController;
use App\Http\Controllers\KeramikController;
use App\Http\Controllers\KeranjangController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SemenController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/cari-barang',[CariBarangController::class,'index']);
Route::get('/cat',[CatController::class,'index'])->name('cat.index');
Route::get('/semen',[SemenController::class,'index'])->name('semen.index');
Route::get('/keramik',[KeramikController::class,'index'])->name('keramik.index');
Route::get('/About',[AboutController::class,'index'])->name('About.index');
Route::get('/Bantuan',[BantuanController::class,'index'])->name('Bantuan.index');
Route::get('/Keranjang',[KeranjangController::class,'index'])->name('keranjang.index');
Route::delete('/keranjang/{id}', [KeranjangController::class, 'hapusItem'])->name('keranjang.hapus');


// Rute untuk menambahkan barang ke keranjang
Route::post('/keranjang', [KeranjangController::class, 'store'])->middleware('auth');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
