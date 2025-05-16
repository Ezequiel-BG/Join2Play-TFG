<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaFortnite extends Model
{
    protected $table = 'juega_fortnite';
    protected $primaryKey = 'id_usuario_videojuego';
    protected $fillable = ['id_usuario_videojuego', 'username', 'rango', 'idiomas', 'descripcion', 'contacto'];

    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class, 'id_usuario_videojuego');
    }
}
