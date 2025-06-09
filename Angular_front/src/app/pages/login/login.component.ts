import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errors: any;
  showErrorBox = true;
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    window.scrollTo(0,0)
    this.loginForm = this.fb.group({
      'email': [''],
      'password': ['']
    });
  }

  onSubmit(): void {
    this.showErrorBox = true;
    this.cleanErrors();
    this.authService.login(this.loginForm.value).subscribe({
      next: response => this.handleResponse(response),
      error: error => this.handleErrors(error),
      complete: () => console.log('Login completo')
    })
  }

  handleResponse(response: any): void {
    console.log(response.message);
    this.tokenService.handleToken(response.token);
    this.isAdmin = this.authService.isAdmin();
    if (this.isAdmin) {
      window.location.href = '/panel-admin';
    } else {
      window.location.href = '/';
    }
  }

  private handleErrors(errors: any): void {
    this.errors = errors.error.errors;
    if (this.errors.email && !this.errors.password) {
      this.alertService.showError('El campo email es obligatorio')
    }
    if (this.errors.password && !this.errors.email) {
      this.alertService.showError('El campo contraseña es obligatorio')
    }
    if (this.errors.email && this.errors.password) {
      this.alertService.showError('Los campos email y contraseña son obligatorios')
    }
    if (!this.errors.email && !this.errors.password) {
      this.alertService.showError(this.errors)
    }
  }

  private cleanErrors(): void {
    this.errors = null;
  }

  closeErrorBox() {
    this.showErrorBox = false;
  }

  hasErrors(): boolean {
    return Object.keys(this.errors || {}).length > 0;
  }
}
