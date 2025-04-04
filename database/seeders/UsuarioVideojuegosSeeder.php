<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuarioVideojuegosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('usuarios_videojuegos')->insert([
            ['id_usuario' => 1, 'id_videojuego' => 1],
            ['id_usuario' => 1, 'id_videojuego' => 2],
            ['id_usuario' => 2, 'id_videojuego' => 3]
        ]);
    }
}
