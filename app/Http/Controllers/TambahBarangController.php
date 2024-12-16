<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TambahBarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $barangList = Barang::all();
        return Inertia::render('TambahBarang', ['barangList' => $barangList]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Validate incoming request data
    $request->validate([
        'nama_barang' => 'required|string|max:255',
        'harga' => 'required|numeric',
        'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg', // Ensure 'gambar' is an image file
        //'category_id' => 'required|integer|exists:categories,id', // Ensure valid category_id
    ]);

    // Handle the image upload
    if ($request->hasFile('gambar') && $request->file('gambar')->isValid()) {
        // Store the image in the 'public' directory
        $imagePath = $request->file('gambar')->store('images', 'public');

        $imagePath = 'storage/' . $imagePath;
    } else {
        // Return a response if the image is invalid or not provided
        return redirect()->back()->withErrors(['gambar' => 'Invalid image file.'])->withInput();
    }

    // Create a new Barang entry in the database with the image path
    Barang::create([
        'nama_barang' => $request->nama_barang,
        'harga' => $request->harga,
        'gambar' => $imagePath, // Store the image path
        'category_id' => $request->category_id,
    ]);

    // Redirect to the index page with a success message
    return redirect()->route('TambahBarang.index')->with('success', 'Barang berhasil ditambahkan.');
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
        //
    }
}
