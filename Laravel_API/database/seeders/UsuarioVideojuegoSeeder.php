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
            ['user_id' => 1, 'id_videojuego' => 3],
            ['user_id' => 2, 'id_videojuego' => 1],
            ['user_id' => 2, 'id_videojuego' => 3],
            ['user_id' => 3, 'id_videojuego' => 2],
            ['user_id' => 3, 'id_videojuego' => 3],
            ['user_id' => 4, 'id_videojuego' => 1],
            ['user_id' => 4, 'id_videojuego' => 2],
            ['user_id' => 5, 'id_videojuego' => 3],
            ['user_id' => 6, 'id_videojuego' => 1],
            ['user_id' => 6, 'id_videojuego' => 2],
            ['user_id' => 6, 'id_videojuego' => 3],
            ['user_id' => 7, 'id_videojuego' => 2],
            ['user_id' => 8, 'id_videojuego' => 3],
            ['user_id' => 9, 'id_videojuego' => 1],
            ['user_id' => 10, 'id_videojuego' => 1],
            ['user_id' => 10, 'id_videojuego' => 3],
            ['user_id' => 11, 'id_videojuego' => 2],
            ['user_id' => 12, 'id_videojuego' => 2],
            ['user_id' => 12, 'id_videojuego' => 3],
            ['user_id' => 13, 'id_videojuego' => 1],
            ['user_id' => 14, 'id_videojuego' => 3],
            ['user_id' => 15, 'id_videojuego' => 1],
            ['user_id' => 15, 'id_videojuego' => 2],
        ]);
    }
}
