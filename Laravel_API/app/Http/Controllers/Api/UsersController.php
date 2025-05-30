<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\JuegaFortnite;
use App\Models\JuegaLol;
use App\Models\JuegaValorant;
use App\Models\User;
use App\Models\UsuarioVideojuego;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class UsersController extends Controller
{
    public function getUsers()
    {
        $users = User::all();

        if ($users->isEmpty()) {
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

        if ($users->isEmpty()) {
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

        if ($users->isEmpty()) {
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

        if ($users->isEmpty()) {
            return response()->json([
                'errors' => 'Ningún usuario disponible'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'usuarios' => $users
        ], Response::HTTP_OK);
    }

    public function createLolUser(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string|max:25',
                'posicion' => 'required|string|max:25',
                'rango' => 'required|string|max:25',
                'idiomas' => 'required|string|max:25',
                'descripcion' => 'required|string|max:90',
                'contacto' => 'required'
            ]);

            $usuario_videojuego = UsuarioVideojuego::create([
                'user_id' => $request->user,
                'id_videojuego' => $request->game
            ]);

            $juegaLol = JuegaLol::create([
                'id_usuario_videojuego' => $usuario_videojuego->id_usuario_videojuego,
                'username' => $request->username,
                'posicion' => $request->posicion,
                'rango' => $request->rango,
                'idiomas' => $request->idiomas,
                'descripcion' => $request->descripcion,
                'contacto' => $request->contacto
            ]);

            return response()->json([
                'message' => 'Usuario registrado en League of Legends correctamente',
                'data' => $juegaLol
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            Log::error('Error al crear usuario LoL: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error al registrar el usuario en League of Legends',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function createValorantUser(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string|max:25',
                'rango' => 'required|string|max:25',
                'idiomas' => 'required|string|max:25',
                'descripcion' => 'required|string|max:90',
                'contacto' => 'required'
            ]);

            $usuario_videojuego = UsuarioVideojuego::create([
                'user_id' => $request->user,
                'id_videojuego' => $request->game
            ]);

            $juegaValorant = JuegaValorant::create([
                'id_usuario_videojuego' => $usuario_videojuego->id_usuario_videojuego,
                'username' => $request->username,
                'clase' => $request->clase,
                'rango' => $request->rango,
                'idiomas' => $request->idiomas,
                'descripcion' => $request->descripcion,
                'contacto' => $request->contacto
            ]);

            return response()->json([
                'message' => 'Usuario registrado en Valorant correctamente',
                'data' => $juegaValorant
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            Log::error('Error al crear usuario Valorant: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error al registrar el usuario en Valorant',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function createFortniteUser(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string|max:25',
                'rango' => 'required|string|max:25',
                'idiomas' => 'required|string|max:25',
                'descripcion' => 'required|string|max:90',
                'contacto' => 'required'
            ]);

            $usuario_videojuego = UsuarioVideojuego::create([
                'user_id' => $request->user,
                'id_videojuego' => $request->game
            ]);

            $juegaFortnite = JuegaFortnite::create([
                'id_usuario_videojuego' => $usuario_videojuego->id_usuario_videojuego,
                'username' => $request->username,
                'posicion' => $request->posicion,
                'rango' => $request->rango,
                'idiomas' => $request->idiomas,
                'descripcion' => $request->descripcion,
                'contacto' => $request->contacto
            ]);

            return response()->json([
                'message' => 'Usuario registrado en Fortnite correctamente',
                'data' => $juegaFortnite
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            Log::error('Error al crear usuario Fortnite: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error al registrar el usuario en Fortnite',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function suscripcionesUsuario($id, $juego)
    {
        $relaciones = [
            'league of legends' => 'juegaLoL',
            'valorant' => 'juegaValorant',
            'fortnite' => 'juegaFortnite',
        ];

        $relacion = $relaciones[strtolower($juego)] ?? null;

        if (!$relacion) {
            return response()->json([
                'error' => 'Juego no soportado'
            ], Response::HTTP_BAD_REQUEST);
        }

        $suscripcion = UsuarioVideojuego::with($relacion)
            ->where('user_id', $id)
            ->whereHas($relacion)
            ->first();

        return response()->json([
            'data' => $suscripcion?->$relacion
        ], Response::HTTP_OK);
    }

    public function updateLolUser(Request $request, $id)
    {
        try {
            $request->validate([
                'username' => 'required|string|max:25',
                'posicion' => 'required|string|max:25',
                'rango' => 'required|string|max:25',
                'idiomas' => 'required|string|max:25',
                'descripcion' => 'required|string|max:90',
                'contacto' => 'required'
            ]);

            $juegaLol = JuegaLol::findOrFail($id);

            $juegaLol->update([
                'username' => $request->username,
                'posicion' => $request->posicion,
                'rango' => $request->rango,
                'idiomas' => $request->idiomas,
                'descripcion' => $request->descripcion,
                'contacto' => $request->contacto
            ]);

            return response()->json([
                'message' => 'Datos de League of Legends actualizados correctamente',
                'data' => $juegaLol
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            Log::error('Error al actualizar usuario LoL: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error al actualizar los datos de League of Legends',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateValorantUser(Request $request, $id)
    {
        try {
            $request->validate([
                'username' => 'required|string|max:25',
                'clase' => 'nullable|string|max:25',
                'rango' => 'required|string|max:25',
                'idiomas' => 'required|string|max:25',
                'descripcion' => 'required|string|max:90',
                'contacto' => 'required'
            ]);

            $juegaValorant = JuegaValorant::findOrFail($id);

            $juegaValorant->update([
                'username' => $request->username,
                'clase' => $request->clase,
                'rango' => $request->rango,
                'idiomas' => $request->idiomas,
                'descripcion' => $request->descripcion,
                'contacto' => $request->contacto
            ]);

            return response()->json([
                'message' => 'Datos de Valorant actualizados correctamente',
                'data' => $juegaValorant
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            Log::error('Error al actualizar usuario Valorant: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error al actualizar los datos de Valorant',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function updateFortniteUser(Request $request, $id)
    {
        try {
            $request->validate([
                'username' => 'required|string|max:25',
                'rango' => 'required|string|max:25',
                'idiomas' => 'required|string|max:25',
                'descripcion' => 'required|string|max:90',
                'contacto' => 'required'
            ]);

            $juegaFortnite = JuegaFortnite::findOrFail($id);

            $juegaFortnite->update([
                'username' => $request->username,
                'posicion' => $request->posicion,
                'rango' => $request->rango,
                'idiomas' => $request->idiomas,
                'descripcion' => $request->descripcion,
                'contacto' => $request->contacto
            ]);

            return response()->json([
                'message' => 'Datos de Fortnite actualizados correctamente',
                'data' => $juegaFortnite
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            Log::error('Error al actualizar usuario Fortnite: ' . $e->getMessage());
            return response()->json([
                'message' => 'Error al actualizar los datos de Fortnite',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroyUser(string $id)
    {
        User::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Usuario eliminado correctamente'
        ], Response::HTTP_OK);
    }

    public function updateUser(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        $usuario = User::findOrFail($id);
        $usuario->name = $validated['name'];
        $usuario->email = $validated['email'];
        $usuario->save();

        return response()->json([
            'message' => 'Usuario actualizado correctamente'
        ], Response::HTTP_OK);
    }

    public function eliminarSuscripcion($usuarioId, $videojuegoId)
    {
        $relacion = UsuarioVideojuego::where('user_id', $usuarioId)
            ->where('id_videojuego', $videojuegoId)
            ->firstOrFail();

        switch ($videojuegoId) {
            case 1:
                $relacion->juegaLol()?->delete();
                break;
            case 2:
                $relacion->juegaValorant()?->delete();
                break;
            case 3:
                $relacion->juegaFortnite()?->delete();
                break;
        }

        $relacion->delete();

        return response()->json([
                'mensaje' => 'Suscripción al juego eliminada con éxito'
            ], Response::HTTP_OK);
    }
}
