<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VideojuegosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('videojuegos')->insert([
            ['nombre' => 'League of Legends'],
            ['nombre' => 'Valorant'],
            ['nombre' => 'Fortnite']
        ]);
    }
}
