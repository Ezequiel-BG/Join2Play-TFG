<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaFortnite extends Model
{
    protected $fillable = ['username', 'rango', 'idiomas', 'descripcion', 'contacto'];

    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class);
    }
}
