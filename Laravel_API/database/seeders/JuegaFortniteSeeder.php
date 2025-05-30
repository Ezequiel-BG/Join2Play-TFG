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
        DB::table('juega_fortnite')->insert([
            [
                'id_usuario_videojuego' => 3,
                'username' => 'KeriosYT',
                'rango' => 'Diamante',
                'idiomas' => 'Español',
                'descripcion' => 'Jugar por diversión',
                'contacto' => 'CuloGélido#5643'
            ],
            [
                'id_usuario_videojuego' => 5,
                'username' => 'SniperPro22',
                'rango' => 'Oro',
                'idiomas' => 'Inglés',
                'descripcion' => 'Solo partidas ranked',
                'contacto' => 'diegoSniper#4323'
            ],
            [
                'id_usuario_videojuego' => 8,
                'username' => 'NoBuildKing',
                'rango' => 'Plata',
                'idiomas' => 'Español',
                'descripcion' => 'Solo modo sin construcción',
                'contacto' => 'diosMio#3452'
            ],
            [
                'id_usuario_videojuego' => 10,
                'username' => 'BuilderJuan',
                'rango' => 'Diamante',
                'idiomas' => 'Español',
                'descripcion' => 'Creativo y ranked',
                'contacto' => 'juanAnalBerto#0987'
            ]
        ]);
    }
}
