import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesServiceService } from '../../services/games.service.service';
import { LolformComponent } from "../../forms/lolform/lolform.component";
import { ValorantformComponent } from "../../forms/valorantform/valorantform.component";
import { FortniteformComponent } from "../../forms/fortniteform/fortniteform.component";
import { TokenService } from '../../services/token.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-register',
  imports: [CommonModule, LolformComponent, ValorantformComponent, FortniteformComponent],
  templateUrl: './game-register.component.html',
  styleUrl: './game-register.component.css'
})
export class GameRegisterComponent {
  isAuthenticated = inject(TokenService).isAuthenticated();
  errors: any;
  games: any;
  loading: boolean = true;
  showLOLModal = false;
  showValorantModal = false;
  showFortniteModal = false;

  constructor(
    private gameService: GamesServiceService,
    private router: Router
  ) {
    window.scrollTo(0,0)
  }

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

  openForm(form: string) {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('login')
    }
    switch (form) {
      case 'League of Legends':
        this.showLOLModal = true;
        break;
      case 'Valorant':
        this.showValorantModal = true;
        break;
      case 'Fortnite':
        this.showFortniteModal = true;
        break;
      default:
        console.log('No form for the game: ' + form)
        break;
    }
  }

  closeLOL() {
    this.showLOLModal = false;
  }

  closeFortnite() {
    this.showFortniteModal = false;
  }

  closeValorant() {
    this.showValorantModal = false;
  }
}
