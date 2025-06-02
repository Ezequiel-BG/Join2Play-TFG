import { Component, NgModule } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GameUser } from '../../models/game-user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css'
})
export class PanelAdminComponent {
  visualizingLol: boolean = false;
  visualizingValorant: boolean = false;
  visualizingFortnite: boolean = false;
  visualizingUser: boolean = true;

  errors: any;
  loading: boolean = true

  lol_users: any[] = [];
  valorant_users: any[] = [];
  fortnite_users: any[] = [];
  users: any[] = [];

  filteredLolUsers: any[] = [];
  filteredValorantUsers: any[] = [];
  filteredFortniteUsers: any[] = [];
  filteredUsers: any[] = [];

  search:string = '';

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.cleanErrors();
    this.userService.getUsers().subscribe({
      next: data => this.handleUsersResponse(data),
      error: error => this.handleUsersErrors(error),
      complete: () => console.log('carga de usuarios completa')
    });
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

  handleLolResponse(data: any) {
    this.lol_users = data.usuarios
    this.filteredLolUsers = data.usuarios
    this.loading = false
  }

  handleValorantResponse(data: any) {
    this.valorant_users = data.usuarios
    this.filteredValorantUsers = data.usuarios
    this.loading = false
  }

  handleFortniteResponse(data: any) {
    this.fortnite_users = data.usuarios
    this.filteredFortniteUsers = data.usuarios
    this.loading = false
  }

  handleUsersResponse(data: any) {
    data.usuarios.forEach((user: any) => {
      if (user.isAdmin != true) {
        this.users.push(user)
        this.filteredUsers.push(user)
      }
    });
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

  handleUsersErrors(error: any) {
    this.errors = 'Error al cargar los usuarios'
    console.log(this.errors)
    this.loading = false
  }

  private cleanErrors(): void {
    this.errors = null;
  }

  setVisualizer(view: string) {
    switch (view) {
      case 'lol':
        this.visualizingLol = true;
        this.visualizingValorant = false;
        this.visualizingFortnite = false;
        this.visualizingUser = false
        this.filteredLolUsers = this.lol_users
        this.search = '';
        break;
      case 'valorant':
        this.visualizingLol = false;
        this.visualizingValorant = true;
        this.visualizingFortnite = false;
        this.visualizingUser = false;
        this.filteredValorantUsers = this.valorant_users
        this.search = '';
        break;
      case 'fortnite':
        this.visualizingLol = false;
        this.visualizingValorant = false;
        this.visualizingFortnite = true;
        this.visualizingUser = false;
        this.filteredFortniteUsers = this.fortnite_users
        this.search = '';
        break;
      case 'users':
        this.visualizingLol = false;
        this.visualizingValorant = false;
        this.visualizingFortnite = false;
        this.visualizingUser = true;
        this.filteredUsers = this.users
        this.search = '';
        break;
      default:
        break;
    }
  }

  filterGames() {
    const searchedUser = this.search.toLowerCase();
    if (this.visualizingLol) {
      this.filteredLolUsers = this.lol_users.filter((user: any) =>
        user.username.toLowerCase().includes(searchedUser)
      );
    } else if (this.visualizingValorant) {
      this.filteredValorantUsers = this.valorant_users.filter((user: any) =>
        user.username.toLowerCase().includes(searchedUser)
      ); 
    } else if (this.visualizingFortnite) {
      this.filteredFortniteUsers = this.fortnite_users.filter((user: any) =>
        user.username.toLowerCase().includes(searchedUser)
      ); 
    } else if (this.visualizingUser) {
      this.filteredUsers = this.users.filter((user: any) =>
        user.name.toLowerCase().includes(searchedUser)
      ); 
    }
  }

  deleteSubscription(userId: number, gameId: number) {
    this.userService.revokeSuscription(userId, gameId).subscribe({
      next: data => window.location.href = '/panel-admin',
      error: error => this.handleRevokedErrors(error),
      complete: () => console.log('subscripción del usuario cancelada con éxito')
    });
  }

  handleRevokedErrors(error: any) {
    this.errors = 'Error al eliminar la subscripción'
    console.log(this.errors)
    this.loading = false
  }

  deleteUsers(userId: number) {
    this.userService.destroyUser(userId, true).subscribe({
      next: data => window.location.href = '/panel-admin',
      error: error => this.handleRevokedErrors(error),
      complete: () => console.log('usuario eliminado con éxito')
    });
  }

  handleDeleteErrors(error: any) {
    this.errors = 'Error al eliminar el usuario'
    console.log(this.errors)
    this.loading = false
  }
}
