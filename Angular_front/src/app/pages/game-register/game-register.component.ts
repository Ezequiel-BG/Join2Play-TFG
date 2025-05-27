import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesServiceService } from '../../services/games.service.service';
import { LolformComponent } from "../../forms/lolform/lolform.component";
import { ValorantformComponent } from "../../forms/valorantform/valorantform.component";
import { FortniteformComponent } from "../../forms/fortniteform/fortniteform.component";
import { TokenService } from '../../services/token.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import Typed from 'typed.js';

@Component({
  selector: 'app-game-register',
  imports: [CommonModule, LolformComponent, ValorantformComponent, FortniteformComponent, FormsModule],
  templateUrl: './game-register.component.html',
  styleUrl: './game-register.component.css'
})
export class GameRegisterComponent {

  @ViewChild('typedText') typedTextRef!: ElementRef;

  isAuthenticated = inject(TokenService).isAuthenticated();
  errors: any;
  games: any;
  search: string = '';
  filteredGames: any[] = [];
  loading: boolean = true;
  showLOLModal = false;
  showValorantModal = false;
  showFortniteModal = false;

  constructor(
    private gameService: GamesServiceService,
    private router: Router
  ) {
    window.scrollTo(0, 0)
  }

  ngAfterViewInit(): void {
    const options = {
      strings: [
        '¡Únete al resto de jugadores!'
      ],
      typeSpeed: 30,
      backSpeed: 20,
      loop: false,
      showCursor: true,
      cursorChar: '|',
    };

    new Typed(this.typedTextRef.nativeElement, options);
  }

  ngOnInit(): void {
    this.cleanErrors();
    this.gameService.getGames().subscribe({
      next: data => this.handleResponse(data),
      error: error => this.handleErrors(error),
      complete: () => console.log('carga de juegos completa')
    });
  }

  handleResponse(data: any) {
    this.games = data.games
    this.filteredGames = [...this.games]
    this.loading = false
  }

  handleErrors(error: any) {
    this.errors = 'Error al cargar los juegos'
    this.loading = false
  }

  private cleanErrors(): void {
    this.errors = null;
  }

  filterGames() {
    const searchedGame = this.search.toLowerCase();
    this.filteredGames = this.games.filter((game: any) =>
      game.nombre.toLowerCase().includes(searchedGame)
    );
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
