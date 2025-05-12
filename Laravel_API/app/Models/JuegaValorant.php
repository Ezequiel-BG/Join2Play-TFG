<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaValorant extends Model
{
    protected $table = 'juega_valorant';

    protected $fillable = ['username', 'clase', 'rango', 'idiomas', 'descripcion', 'contacto'];

    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class, 'id_usuario_videojuego');
    }
}
