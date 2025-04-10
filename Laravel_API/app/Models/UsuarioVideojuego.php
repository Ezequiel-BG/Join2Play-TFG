<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsuarioVideojuego extends Model
{
    protected $fillable = ['id_usuario', 'id_videojuego', 'fecha_registro'];
    
    public function usuario() {
        return $this->belongsTo(User::class);
    }
    
    public function videojuego() {
        return $this->belongsTo(Videojuego::class);
    }
}
