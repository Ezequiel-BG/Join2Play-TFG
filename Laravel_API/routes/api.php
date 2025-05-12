<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\api\UsersController;
use App\Http\Controllers\api\VideogameController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Rutas para el auth
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::delete('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

//Rutas para el crud de videojuegos
Route::get('game', [VideogameController::class, 'index']);
Route::post('game/{id}', [VideogameController::class, 'update']);
Route::delete('game/{id}', [VideogameController::class, 'destroy']);

//Rutas para el crud de usuarios
Route::get('user', [UsersController::class, 'getUsers']);
Route::get('lol_user', [UsersController::class, 'getLolUsers']);
Route::get('valorant_user', [UsersController::class, 'getValorantUsers']);
Route::get('fortnite_user', [UsersController::class, 'getFortniteUsers']);
Route::post('user/{id}', [UsersController::class, 'update']);
Route::delete('user/{id}', [UsersController::class, 'destroy']);