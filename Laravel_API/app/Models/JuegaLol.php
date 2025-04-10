<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JuegaLol extends Model
{
    protected $fillable = ['posicion', 'rango', 'objetivo'];
    
    public function usuarioVideojuego() {
        return $this->belongsTo(UsuarioVideojuego::class);
    }
}
