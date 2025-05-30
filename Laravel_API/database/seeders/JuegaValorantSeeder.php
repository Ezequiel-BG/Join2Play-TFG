<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JuegaValorantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('juega_valorant')->insert([
            [
                'id_usuario_videojuego' => 2,
                'username' => 'GoergeOfTheJungle',
                'rango' => 'Oro',
                'idiomas' => 'Español',
                'descripcion' => 'Conocer a otros jugadores',
                'contacto' => 'Pepinoloco#1232'
            ],
            [
                'id_usuario_videojuego' => 7,
                'username' => 'ViperMain',
                'rango' => 'Platino',
                'idiomas' => 'Inglés',
                'descripcion' => 'Busco equipo para ranked',
                'contacto' => 'viper#0001'
            ],
            [
                'id_usuario_videojuego' => 11,
                'username' => 'AimGod22',
                'rango' => 'Diamante',
                'idiomas' => 'Inglés',
                'descripcion' => 'DuoQ con gente seria',
                'contacto' => 'LolaLolita#6969'
            ],
            [
                'id_usuario_videojuego' => 12,
                'username' => 'PlantMaster',
                'rango' => 'Plata',
                'idiomas' => 'Español',
                'descripcion' => 'Busco premade chill',
                'contacto' => 'IlloJuan#1231'
            ]
        ]);
    }
}
