<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaValorant extends Model
{
    protected $fillable = ['rango', 'objetivo'];

    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class);
    }
}
