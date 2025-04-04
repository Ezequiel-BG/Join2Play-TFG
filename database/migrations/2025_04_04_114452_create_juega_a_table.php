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
        Schema::create('juega_a_lol', function (Blueprint $table) {
            $table->foreignId('id_usuario_videojuego')->primary()->constrained('usuarios_videojuegos')->onDelete('cascade');
            $table->string('posicion');
            $table->string('rango');
            $table->string('objetivo');
            $table->timestamps();
        });

        Schema::create('juega_a_valorant', function (Blueprint $table) {
            $table->foreignId('id_usuario_videojuego')->primary()->constrained('usuarios_videojuegos')->onDelete('cascade');
            $table->string('rango');
            $table->string('objetivo');
            $table->timestamps();
        });

        Schema::create('juega_a_fortnite', function (Blueprint $table) {
            $table->foreignId('id_usuario_videojuego')->primary()->constrained('usuarios_videojuegos')->onDelete('cascade');
            $table->string('rango');
            $table->string('objetivo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('juega_a_lol');
        Schema::dropIfExists('juega_a_valorant');
        Schema::dropIfExists('juega_a_fortnite');
    }
};
