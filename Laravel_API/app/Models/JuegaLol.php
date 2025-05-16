<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaLol extends Model
{
    protected $table = 'juega_lol';
    protected $primaryKey = 'id_usuario_videojuego';
    protected $fillable = ['id_usuario_videojuego', 'username', 'posicion', 'rango', 'idiomas', 'descripcion', 'contacto'];
    
    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class, 'id_usuario_videojuego');
    }
}
