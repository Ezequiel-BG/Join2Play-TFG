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
            ['id_usuario_videojuego' => 1, 'posicion' => 'Mid', 'rango' => 'Plata', 'objetivo' => 'Competitivo']
        ]);
    }
}
