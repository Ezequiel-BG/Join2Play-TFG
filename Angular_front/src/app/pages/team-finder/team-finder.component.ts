import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-team-finder',
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './team-finder.component.html',
  styleUrl: './team-finder.component.css'
})
export class TeamFinderComponent {
  isAuthenticated = inject(TokenService).isAuthenticated();
  errors: any;
  lol_users: any;
  valorant_users: any;
  fortnite_users: any;
  loading: boolean = true;

  constructor (
    private userService: UserService
  ) {
    window.scrollTo(0,0)
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

  handleLolResponse (data: any) {
    this.lol_users = data.usuarios
    this.loading = false
  }

  handleValorantResponse (data: any) {
    this.valorant_users = data.usuarios
    this.loading = false
  }

  handleFortniteResponse (data: any) {
    this.fortnite_users = data.usuarios
    this.loading = false
  }

  handleLolErrors (error: any) {
    this.errors = 'Error al cargar los usuarios de lol'
    console.log(this.errors);
    this.loading = false
  }

  handleValorantErrors (error: any) {
    this.errors = 'Error al cargar los usuarios de valorant'
    console.log(this.errors);
    this.loading = false
  }

  handleFortniteErrors (error: any) {
    this.errors = 'Error al cargar los usuarios de fortnite'
    console.log(this.errors);
    this.loading = false
  }

  private cleanErrors(): void {
    this.errors = null;
  }
}
