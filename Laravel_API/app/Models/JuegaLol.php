<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaLol extends Model
{
    protected $table = 'juega_lol';

    protected $fillable = ['username', 'posicion', 'rango', 'idiomas', 'descripcion', 'contacto'];
    
    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class, 'id_usuario_videojuego');
    }
}
