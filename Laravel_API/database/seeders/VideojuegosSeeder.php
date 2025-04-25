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
        DB::table('videojuegos')->insert([[
            'nombre' => 'League of Legends',
            'imagen' => 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b?resize=1&w=480&h=270&quality=ultra'
        ],[
            'nombre' => 'Valorant',
            'imagen' => 'https://assets.xboxservices.com/assets/4e/bc/4ebcb533-e184-42f3-833b-9aa47a81f39e.jpg?n=153142244433_Poster-Image-1084_1920x720.jpg'
        ],[
            'nombre' => 'Fortnite',
            'imagen' => 'https://wallpapercat.com/w/full/2/0/8/1143-3840x2160-desktop-4k-fortnite-background-photo.jpg'    
        ]
        ]);
    }
}
