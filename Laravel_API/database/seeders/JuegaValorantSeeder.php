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
            ['id_usuario_videojuego' => 2, 'rango' => 'Oro', 'objetivo' => 'Divertirse']
        ]);
    }
}
