<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuario_videojuego', function (Blueprint $table) {
            $table->id('id_usuario_videojuego');
            $table->foreignId('id_videojuegos')->constrained('videojuegos')->onDelete('');
            $table->foreignId('id_usuarios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario_videojuego');
    }
};
