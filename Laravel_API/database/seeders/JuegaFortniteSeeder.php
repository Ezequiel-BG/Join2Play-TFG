<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JuegaFortniteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('juega_fortnite')->insert([[
            'id_usuario_videojuego' => 3,
            'username' => 'KeriosYT',
            'rango' => 'Diamante', 
            'idiomas' => 'Español',
            'descripcion' => 'Jugar por diversión',
            'contacto' => 'prueba'    
        ]]);
    }
}
