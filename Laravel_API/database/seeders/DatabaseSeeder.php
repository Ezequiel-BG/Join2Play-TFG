<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin'),
            'isAdmin' => true,
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Test User2',
            'email' => 'test2@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Jorge',
            'email' => 'jorge@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Laura',
            'email' => 'laura@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Carlos',
            'email' => 'carlos@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'María',
            'email' => 'maria@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Pedro',
            'email' => 'pedro@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Ana',
            'email' => 'ana@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Luis',
            'email' => 'luis@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Carmen',
            'email' => 'carmen@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Miguel',
            'email' => 'miguel@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Lucía',
            'email' => 'lucia@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Andrés',
            'email' => 'andres@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Elena',
            'email' => 'elena@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);

        User::factory()->create([
            'name' => 'Raúl',
            'email' => 'raul@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => false,
        ]);


        $this->call([
            VideojuegosSeeder::class,
            UsuarioVideojuegoSeeder::class,
            JuegaLolSeeder::class,
            JuegaValorantSeeder::class,
            JuegaFortniteSeeder::class,
        ]);
    }
}
