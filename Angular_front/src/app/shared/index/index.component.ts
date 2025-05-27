import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-index',
  imports: [RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  menuOpen = false;
  userName: string;
  isAdmin: boolean;
  showUserMenu: boolean = false;
  isLoggedIn = inject(TokenService).isAuthenticated();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private alertService: AlertService
  ) { 
    this.userName = this.authService.getUserName();
    this.isAdmin = this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: response => this.handleResponse(response),
      error: errors => this.handleErrors(errors),
      complete: () => console.log('Logout completo')
    })
  }

  private handleResponse(response: any): void {
    console.log(response.message);
    this.tokenService.revokeToken();
    window.location.href = '/';
  }

  private handleErrors(errors: any): void {
    console.log(errors.error);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
}
