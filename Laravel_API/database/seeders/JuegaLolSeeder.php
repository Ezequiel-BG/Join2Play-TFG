<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JuegaLolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('juega_lol')->insert([[
            'id_usuario_videojuego' => 1,
            'username' => 'paquito69HardcorePlayer', 
            'posicion' => 'Mid', 
            'rango' => 'Plata', 
            'idiomas' => 'Inglés',
            'descripcion' => 'Jugar partidas competitivas',
            'contacto' => 'prueba'
        ]]);
    }
}
