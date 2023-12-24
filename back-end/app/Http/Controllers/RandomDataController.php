<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RandomDataController extends Controller
{
    public function index()
    {
        // Fazer uma chamada à API RandomData
        $response = Http::get('https://random-data-api.com/api/v2/users?size=100');
        $data = $response->json();

        // Retornar os dados como JSON
        return response()->json($data);
    }
}
