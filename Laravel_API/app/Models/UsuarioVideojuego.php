<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsuarioVideojuego extends Model
{
    protected $table = 'usuarios_videojuegos';

    protected $primaryKey = 'id_usuario_videojuego';

    protected $fillable = ['user_id', 'id_videojuego', 'fecha_registro'];
    
    public function usuario() {
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function videojuego() {
        return $this->belongsTo(Videojuego::class, 'id_videojuego');
    }

    public function juegaLol() {
        return $this->hasOne(JuegaLol::class, 'id_usuario_videojuego', 'id_usuario_videojuego');
    }

    public function juegaValorant() {
        return $this->hasOne(JuegaValorant::class,'id_usuario_videojuego', 'id_usuario_videojuego');
    }

    public function juegaFortnite() {
        return $this->hasOne(JuegaFortnite::class,'id_usuario_videojuego', 'id_usuario_videojuego');
    }
}
