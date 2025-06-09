import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errors: any;
  showErrorBox = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    window.scrollTo(0,0)
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
      isAdmin : false
    });
  }

  OnSubmit(): void {
    this.showErrorBox = true;
    this.cleanErrors();
    this.authService.register(this.registerForm.value).subscribe({
      next: response => this.handleResponse(response),
      error: error => this.handleErrors(error),
      complete: () => console.log('Registro completo')
    });
  }

  private handleResponse(response: any): void {
    console.log(response.message);
    window.location.href = '/login';
  }

  private handleErrors(errors: any): void {
    this.errors = errors.error.errors;
    if (this.errors.email) {
      if (this.errors.email == 'The email field is required.') {
        this.alertService.showError('El campo email es obligatorio')
      } else if (this.errors.email == 'The email field must be a valid email address.') {
        this.alertService.showError('Escribe un email válido, por favor')
      } else {
        this.alertService.showError('El email ya está en uso')
      }
    }
    if (this.errors.email && this.errors.password && this.errors.name) {
      this.alertService.showError('Por favor rellene los campos')
    }
    if (this.errors.password && !this.errors.email && !this.errors.name) {
      this.alertService.showError('El campo contraseña y confirmar contraseña no han sido rellenados o no concuerdan')
    }
    console.log(this.errors)
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
