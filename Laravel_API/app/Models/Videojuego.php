<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Videojuego extends Model
{
    protected $fillable = ['nombre', 'imagen'];

    public function usuarios() {
        return $this->belongsToMany(User::class, 'usuarios_videojuegos', 'id_videojuego', 'id_usuario');
    }
}
