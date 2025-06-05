<?php

use app\Http\Controllers\Api\AuthController;
use app\Http\Controllers\Api\UsersController;
use app\Http\Controllers\Api\VideogameController;
use Illuminate\Support\Facades\Route;

//Rutas para el auth
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::delete('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

//Rutas para el crud de videojuegos
Route::get('game', [VideogameController::class, 'index']);
Route::get('game_id/{game_name}', [VideogameController::class, 'getGameId']);
Route::post('game/{id}', [VideogameController::class, 'update']);
Route::delete('game/{id}', [VideogameController::class, 'destroy']);

//Rutas para el crud de usuarios
Route::get('user', [UsersController::class, 'getUsers']);
Route::post('user/{id}', [UsersController::class, 'updateUser']);
Route::delete('user/{id}', [UsersController::class, 'destroyUser']);

Route::get('lol_user', [UsersController::class, 'getLolUsers']);
Route::post('lol_user/create', [UsersController::class, 'createLolUser']);
Route::post('lol_user/update/{id}', [UsersController::class, 'updateLolUser']);

Route::get('valorant_user', [UsersController::class, 'getValorantUsers']);
Route::post('valorant_user/create', [UsersController::class, 'createValorantUser']);
Route::post('valorant_user/update/{id}', [UsersController::class, 'updateValorantUser']);

Route::get('fortnite_user', [UsersController::class, 'getFortniteUsers']);
Route::post('fortnite_user/create', [UsersController::class, 'createFortniteUser']);
Route::post('fortnite_user/update/{id}', [UsersController::class, 'updateFortniteUser']);

Route::get('suscripcionesUsers/{id}/{juego}', [UsersController::class, 'suscripcionesUsuario']);
Route::delete('user/{usuarioId}/{videojuegoId}', [UsersController::class, 'eliminarSuscripcion']);