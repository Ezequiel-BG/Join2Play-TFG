import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesServiceService } from '../../services/games.service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-register',
  imports: [CommonModule, RouterLink],
  templateUrl: './game-register.component.html',
  styleUrl: './game-register.component.css'
})
export class GameRegisterComponent {
  errors: any;
  games: any;
  loading: boolean = true;

  constructor(
    private gameService: GamesServiceService
  ) {}

  ngOnInit(): void {
    this.cleanErrors();
    this.gameService.getGames().subscribe({
      next: data => this.handleResponse(data),
      error: error => this.handleErrors(error),
      complete: () => console.log('carga de juegos completa')
    });
  }

  handleResponse (data: any) {
    this.games = data.games
    this.loading = false
  }

  handleErrors (error: any) {
    this.errors = 'Error al cargar los juegos'
    console.log(this.errors);
    this.loading = false
  }

  private cleanErrors(): void {
    this.errors = null;
  }
}
