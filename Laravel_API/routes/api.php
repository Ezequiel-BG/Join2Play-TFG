<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\api\VideogameController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Rutas para el auth
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::delete('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


//Rutas para el crud de Videojuegos
Route::get('game', [VideogameController::class, 'index']);
Route::post('game/{id}', [VideogameController::class, 'update']);
Route::delete('game/{id}', [VideogameController::class, 'destroy']);