import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SlicePipe } from '@angular/common';
import { ContactInfoComponent } from '../../shared/contact-info/contact-info.component';
import { GameUser } from '../../models/game-user.model';

@Component({
  selector: 'app-team-finder',
  imports: [NgIf, NgFor, RouterLink, ContactInfoComponent, SlicePipe],
  templateUrl: './team-finder.component.html',
  styleUrl: './team-finder.component.css'
})
export class TeamFinderComponent {
  isAuthenticated = inject(TokenService).isAuthenticated();
  selectedUser: any = null;
  selectedGame: string = '';
  errors: any;
  lol_users: GameUser[] = [];
  valorant_users: GameUser[] = [];
  fortnite_users: GameUser[] = [];
  lolFilters: any = { posicion: '', rango: '', idiomas: '' };
  valorantFilters: any = { rango: '', idiomas: '' };
  fortniteFilters: any = { rango: '', idiomas: '' };
  filtered_lol_users: GameUser[] = [];
  filtered_valorant_users: GameUser[] = [];
  filtered_fortnite_users: GameUser[] = [];
  is_lol_user: any;
  is_valorant_user: any;
  is_fortnite_user: any;
  show_lol_table: boolean = true;
  show_valorant_table: boolean = true;
  show_fortnite_table: boolean = true;
  pageSize = 10;
  lolPage = 1;
  valorantPage = 1;
  fortnitePage = 1;
  loading: boolean = true;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    window.scrollTo(0, 0)
    const userId = this.authService.getUserId();

    //Uso de los servicios que conectan y hacen peticiones a la API
    this.userService.userSubscription(userId, 'league of legends').subscribe((response: any) => {
      if (response.data) {
        this.is_lol_user = true
      }
    })

    this.userService.userSubscription(userId, 'valorant').subscribe((response: any) => {
      if (response.data) {
        this.is_valorant_user = true
      }
    })

    this.userService.userSubscription(userId, 'fortnite').subscribe((response: any) => {
      if (response.data) {
        this.is_fortnite_user = true
      }
    })
  }

  ngOnInit(): void {
    this.cleanErrors();
    this.userService.getLolUsers().subscribe({
      next: data => this.handleLolResponse(data),
      error: error => this.handleLolErrors(error),
      complete: () => console.log('carga de usuarios de lol completa')
    });
    this.userService.getValorantUsers().subscribe({
      next: data => this.handleValorantResponse(data),
      error: error => this.handleValorantErrors(error),
      complete: () => console.log('carga de usuarios de valorant completa')
    });
    this.userService.getFortniteUsers().subscribe({
      next: data => this.handleFortniteResponse(data),
      error: error => this.handleFortniteErrors(error),
      complete: () => console.log('carga de usuarios de fortnite completa')
    });
  }

  //Manejo de respuestas de la API
  handleLolResponse(data: any) {
    this.lol_users = data.usuarios
    this.filterLolUsers();
    this.loading = false
  }

  handleValorantResponse(data: any) {
    this.valorant_users = data.usuarios
    this.filterValorantUsers();
    this.loading = false
  }

  handleFortniteResponse(data: any) {
    this.fortnite_users = data.usuarios
    this.filterFortniteUsers();
    this.loading = false
  }

  handleLolErrors(error: any) {
    this.errors = 'Error al cargar los usuarios de lol'
    console.log(this.errors);
    this.loading = false
  }

  handleValorantErrors(error: any) {
    this.errors = 'Error al cargar los usuarios de valorant'
    console.log(this.errors);
    this.loading = false
  }

  handleFortniteErrors(error: any) {
    this.errors = 'Error al cargar los usuarios de fortnite'
    console.log(this.errors);
    this.loading = false
  }

  private cleanErrors(): void {
    this.errors = null;
  }


  //Control de los modales de contacto
  openContactModal(user: any) {
    this.selectedUser = user;
  }

  closeModal() {
    this.selectedUser = null;
  }


  //Control de paginación de las tablas
  get totalLolPages(): number {
    return Math.ceil(this.lol_users.length / this.pageSize);
  }
  get totalValorantPages(): number {
    return Math.ceil(this.valorant_users.length / this.pageSize);
  }
  get totalFortnitePages(): number {
    return Math.ceil(this.fortnite_users.length / this.pageSize);
  }

  prevLolPage() {
    if (this.lolPage > 1)
      this.lolPage--;
  }
  nextLolPage() {
    if (this.lolPage < this.totalLolPages)
      this.lolPage++;
  }
  prevValorantPage() {
    if (this.valorantPage > 1)
      this.valorantPage--;
  }
  nextValorantPage() {
    if (this.valorantPage < this.totalValorantPages)
      this.valorantPage++;
  }
  prevFortnitePage() {
    if (this.fortnitePage > 1)
      this.fortnitePage--;
  }
  nextFortnitePage() {
    if (this.fortnitePage < this.totalFortnitePages)
      this.fortnitePage++;
  }


  //Funciones del filtrado
  onGameSelect(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    this.selectedGame = selected;
    this.lolFilters = { posicion: '', rango: '', idiomas: '' };
    this.filterLolUsers();
    this.valorantFilters = { rango: '', idiomas: '' };
    this.filterValorantUsers();
    this.fortniteFilters = { rango: '', idiomas: '' };
    this.filterFortniteUsers();
    switch (this.selectedGame) {
      case 'League of Legends':
        this.show_fortnite_table = false;
        this.show_valorant_table = false;
        this.show_lol_table = true;
        break;
      case 'Valorant':
        this.show_fortnite_table = false;
        this.show_valorant_table = true;
        this.show_lol_table = false;
        break;
      case 'Fortnite':
        this.show_fortnite_table = true;
        this.show_valorant_table = false;
        this.show_lol_table = false;
        break;
      default:
        this.show_fortnite_table = true;
        this.show_valorant_table = true;
        this.show_lol_table = true;
        break;
    }
  }

  onLolFilterChange(event: Event, filtro: string) {
    const valor = (event.target as HTMLSelectElement).value;
    this.lolFilters[filtro] = valor;
    this.filterLolUsers();
  }

  onValorantFilterChange(event: Event, filtro: string) {
    const valor = (event.target as HTMLSelectElement).value;
    this.valorantFilters[filtro] = valor;
    this.filterValorantUsers();
  }

  onFortniteFilterChange(event: Event, filtro: string) {
    const valor = (event.target as HTMLSelectElement).value;
    this.fortniteFilters[filtro] = valor;
    this.filterFortniteUsers();
  }

  filterLolUsers() {
    this.filtered_lol_users = this.lol_users.filter(user =>
      (!this.lolFilters.posicion || user.posicion === this.lolFilters.posicion) &&
      (!this.lolFilters.rango || user.rango === this.lolFilters.rango) &&
      (!this.lolFilters.idiomas || user.idiomas === this.lolFilters.idiomas)
    );
  }

  filterValorantUsers() {
    this.filtered_valorant_users = this.valorant_users.filter(user =>
      (!this.valorantFilters.rango || user.rango === this.valorantFilters.rango) &&
      (!this.valorantFilters.idiomas || user.idiomas === this.valorantFilters.idiomas)
    );
  }

  filterFortniteUsers() {
    this.filtered_fortnite_users = this.fortnite_users.filter(user =>
      (!this.fortniteFilters.rango || user.rango === this.fortniteFilters.rango) &&
      (!this.fortniteFilters.idiomas || user.idiomas === this.fortniteFilters.idiomas)
    );
  }
}
