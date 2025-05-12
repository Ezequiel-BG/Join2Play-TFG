<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\JuegaFortnite;
use App\Models\JuegaLol;
use App\Models\JuegaValorant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    public function getUsers()
    {
        $users = User::all();

        if ($users -> isEmpty()) {
            return response()->json([
                'errors' => 'Ningún usuario disponible'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'usuarios' => $users
        ], Response::HTTP_OK);
    }

    public function getLolUsers()
    {
        $users = JuegaLol::with('usuarioVideojuego.usuario')->get();

        if ($users -> isEmpty()) {
            return response()->json([
                'errors' => 'Ningún usuario disponible'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'usuarios' => $users
        ], Response::HTTP_OK);
    }

    public function getValorantUsers()
    {
        $users = JuegaValorant::with('usuarioVideojuego.usuario')->get();

        if ($users -> isEmpty()) {
            return response()->json([
                'errors' => 'Ningún usuario disponible'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'usuarios' => $users
        ], Response::HTTP_OK);
    }

    public function getFortniteUsers()
    {
        $users = JuegaFortnite::with('usuarioVideojuego.usuario')->get();

        if ($users -> isEmpty()) {
            return response()->json([
                'errors' => 'Ningún usuario disponible'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'usuarios' => $users
        ], Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:25',
            'email' => 'required|email',
            'password' => 'required|string|max:25'
        ]);
    
        $user = User::where('id', $id);
    
        if (is_null($user)) {
            return response()->json([
                'errors' => 'Usuario no encontrado.',
            ], Response::HTTP_NOT_FOUND);
        }
    
        $user->update($request->all());
    
        return response()->json([
            'message' => 'Usuario actualizado correctamente',
            'data' => $user
        ], Response::HTTP_OK);
    }

    public function destroy(string $id)
    {
        User::where('id', $id)->delete();

        return response()->json([
            'message' => 'Usuario eliminado correctamente'
        ], Response::HTTP_OK);
    }
}
