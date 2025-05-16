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
        Schema::create('juega_lol', function (Blueprint $table) {
            $table->unsignedBigInteger('id_usuario_videojuego')->primary();
            $table->string('username')->nullable();
            $table->string('posicion')->nullable();
            $table->string('rango')->nullable();
            $table->string('idiomas')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('contacto')->nullable();
            $table->timestamps();
        
            $table->foreign('id_usuario_videojuego')->references('id_usuario_videojuego')->on('usuarios_videojuegos')->onDelete('cascade');
        });

        Schema::create('juega_valorant', function (Blueprint $table) {
            $table->unsignedBigInteger('id_usuario_videojuego')->primary();
            $table->string('username')->nullable();
            $table->string('rango')->nullable();
            $table->string('idiomas')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('contacto')->nullable();
            $table->timestamps();
        
            $table->foreign('id_usuario_videojuego')->references('id_usuario_videojuego')->on('usuarios_videojuegos')->onDelete('cascade');
        });

        Schema::create('juega_fortnite', function (Blueprint $table) {
            $table->unsignedBigInteger('id_usuario_videojuego')->primary();
            $table->string('username')->nullable();
            $table->string('rango')->nullable();
            $table->string('idiomas')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('contacto')->nullable();
            $table->timestamps();
        
            $table->foreign('id_usuario_videojuego')->references('id_usuario_videojuego')->on('usuarios_videojuegos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('juega_lol');
        Schema::dropIfExists('juega_valorant');
        Schema::dropIfExists('juega_fortnite');
    }
};
