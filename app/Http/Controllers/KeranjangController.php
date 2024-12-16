<?php

namespace App\Http\Controllers;

use App\Models\BarangTerjual;
use App\Models\Keranjang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class KeranjangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $keranjang = Keranjang::with('barang')->where('user_id',Auth::id())->get();
        $totalPrice = $keranjang->sum(function ($item) {
        return $item->barang->harga * $item->jumlah;
    });
        return Inertia::render('Keranjang',[
            'keranjang' => $keranjang,
            'totalPrice' => $totalPrice
        ]);       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'barang_id' => 'required|exists:barangs,id',
            'jumlah' => 'required|integer|min:1',
        ]);

        // Mendapatkan user yang sedang login
        $userId = Auth::id();

        // Mencari keranjang berdasarkan user dan barang
        $keranjang = Keranjang::where('user_id', $userId)
            ->where('barang_id', $request->barang_id)
            ->first();

        // Jika keranjang sudah ada, perbarui jumlahnya
        if ($keranjang) {
            $keranjang->jumlah += $request->jumlah;
            $keranjang->total_harga = $keranjang->jumlah * $keranjang->barang->harga;
            $keranjang->save();
        } else {
            // Jika keranjang baru, buat entri baru
            Keranjang::create([
                'user_id' => $userId,
                'barang_id' => $request->barang_id,
                'jumlah' => $request->jumlah,
                // 'total_harga' => $request->qty * $request->barang->harga,
            ]);
        }

        return redirect()->back()->with([
            'message' => 'Barang berhasil ditambahkan ke keranjang!',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
 * Remove the specified resource from storage.
 */
public function destroy(string $id)
{
    // Mencari item keranjang berdasarkan ID dan user yang sedang login
    $keranjang = Keranjang::where('id', $id)->where('user_id', Auth::id())->first();

    // Jika item keranjang ditemukan, hapus item tersebut
    if ($keranjang) {
        $keranjang->delete();
        return redirect()->back()->with('message', 'Item berhasil dihapus dari keranjang.');
    }

    // Jika item keranjang tidak ditemukan
    return redirect()->back()->with('error', 'Item tidak ditemukan di keranjang.');
}

public function checkout(Request $request)
{
    $userId = Auth::id();
    Log::info('Checkout initiated by user', ['user_id' => $userId]);

    // Get cart data from the request
    $keranjangItems = $request->input('keranjang');
    Log::info('Items received for checkout', ['item_count' => count($keranjangItems)]);

    $itemsProcessed = []; // Collect details of processed items for the response

    foreach ($keranjangItems as $item) {
        try {
            // Find the corresponding item in the user's cart
            $cartItem = Keranjang::where('user_id', $userId)
                ->where('user_id', $item['user_id'])
                ->first();

                Log::info($cartItem);

            if ($cartItem) {
                // Add item to barang_terjual using data from the cart
                BarangTerjual::create([
                    'user_id' => $userId,
                    'barang_id' => $cartItem->barang_id,
                    'jumlah' => $item['jumlah'],
                    'total_harga' => $item['jumlah'] * $item['harga'],
                ]);

                Log::info('Item moved to barang_terjual', [
                    'user_id' => $userId,
                    'barang_id' => $cartItem->barang_id,
                    'jumlah' => $item['jumlah'],
                    'total_harga' => $item['jumlah'] * $item['harga'],
                ]);

                // Remove item from keranjang
                $cartItem->delete();
                Log::info('Item deleted from keranjang', [
                    'user_id' => $userId,
                    'barang_id' => $cartItem->barang_id,
                ]);

                // Add details to processed items for the response
                $itemsProcessed[] = [
                    'barang_id' => $cartItem->barang_id,
                    'jumlah' => $item['jumlah'],
                    'total_harga' => $item['jumlah'] * $item['harga'],
                ];
            } else {
                Log::warning('Item not found in keranjang for user', [
                    'user_id' => $userId,
                    'barang_id' => $item['barang_id'],
                ]);
            }
             return response()->json([
        'status' => 'success',
        'message' => 'Checkout berhasil. Barang telah dipindahkan ke barang terjual.',
        'items_processed' => $itemsProcessed,
    ],201);
        } catch (\Exception $e) {
            Log::error('Failed to process item during checkout', [
                'user_id' => $userId,
                'barang_id' => $item['barang_id'],
                'error_message' => $e->getMessage(),
            ]);

            return response()->json([
                'status' => 'error',
                'message' => 'Failed to process some items during checkout.',
                'error' => $e->getMessage(),
            ]);
        }
    }

    Log::info('Checkout process completed', ['user_id' => $userId]);

    return response()->json([
        'status' => 'success',
        'message' => 'Checkout berhasil. Barang telah dipindahkan ke barang terjual.',
        'items_processed' => $itemsProcessed,
    ],201);
   
}





}
