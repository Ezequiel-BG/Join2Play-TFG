<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaLol extends Model
{
    protected $fillable = ['username', 'posicion', 'rango', 'idiomas', 'descripcion', 'contacto'];
    
    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class);
    }
}
