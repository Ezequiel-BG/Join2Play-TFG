<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Videojuego;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VideogameController extends Controller
{
    public function index(): JsonResponse
    {
        $games = Videojuego::all();

        if ($games -> isEmpty()) {
            return response()->json([
                'errors' => 'Ningún videojuego disponible'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'games' => $games
        ], Response::HTTP_OK);
    }

    public function getGameId(string $game_name): JsonResponse
    {
        try {
            $juego = Videojuego::where('nombre', $game_name)->first();

            if (!$juego) {
                return response()->json([
                    'message' => "El juego '$game_name' no fue encontrado."
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'game_id' => $juego->id_videojuego,
                'nombre' => $juego->nombre
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al procesar la solicitud.',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'imagen' => 'required|url'
        ]);
    
        $videojuego = Videojuego::where('id_videojuego', $id);
    
        if (is_null($videojuego)) {
            return response()->json([
                'errors' => 'Videojuego no encontrado.',
            ], Response::HTTP_NOT_FOUND);
        }
    
        $videojuego->update($request->all());
    
        return response()->json([
            'message' => 'Videojuego actualizado correctamente',
            'data' => $videojuego
        ], Response::HTTP_OK);
    }

    public function destroy(string $id):JsonResponse
    {
        Videojuego::where('id_videojuego', $id)->delete();

        return response()->json([
            'message' => 'Videojuego eliminado correctamente'
        ], Response::HTTP_OK);
    }
}
