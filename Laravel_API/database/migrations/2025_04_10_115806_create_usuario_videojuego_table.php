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
        Schema::create('usuarios_videojuegos', function (Blueprint $table) {
            $table->id('id_usuario_videojuego');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('id_videojuego');
            $table->timestamps();
        
            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
            $table->foreign('id_videojuego')->references('id_videojuego')->on('videojuegos')->onDelete('cascade');
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
