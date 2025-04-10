<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuarioVideojuegoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('usuarios_videojuegos')->insert([
            ['user_id' => 1, 'id_videojuego' => 1],
            ['user_id' => 1, 'id_videojuego' => 2],
            ['user_id' => 2, 'id_videojuego' => 3]
        ]);
    }
}
