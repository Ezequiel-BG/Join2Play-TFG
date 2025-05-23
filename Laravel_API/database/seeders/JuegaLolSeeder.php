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
        DB::table('juega_lol')->insert([
            [
                'id_usuario_videojuego' => 1,
                'username' => 'paquito69HardcorePlayer',
                'posicion' => 'Mid',
                'rango' => 'Plata',
                'idiomas' => 'Inglés',
                'descripcion' => 'Jugar partidas competitivas',
                'contacto' => 'PacoTryhardCarryLol#9669'
            ],
            [
                'id_usuario_videojuego' => 4,
                'username' => 'ShadowKill',
                'posicion' => 'Top',
                'rango' => 'Oro',
                'idiomas' => 'Español',
                'descripcion' => 'Team ranked con voz',
                'contacto' => 'DieguitoLol#1244'
            ],
            [
                'id_usuario_videojuego' => 6,
                'username' => 'LuciferMain',
                'posicion' => 'Jungla',
                'rango' => 'Platino',
                'idiomas' => 'Español, Inglés',
                'descripcion' => 'Soy main jungla, serio y activo',
                'contacto' => 'Luis#4311'
            ],
            [
                'id_usuario_videojuego' => 9,
                'username' => 'SoftSupport',
                'posicion' => 'Support',
                'rango' => 'Bronce',
                'idiomas' => 'Español',
                'descripcion' => 'Busco ADC para duoQ',
                'contacto' => 'Lesviatán#4322'
            ]
        ]);
    }
}
