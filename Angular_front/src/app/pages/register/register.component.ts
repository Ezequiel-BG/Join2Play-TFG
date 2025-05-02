import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

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
    private fb: FormBuilder
  ) {
    window.scrollTo(0,0)
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: ['']
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
    this.router.navigateByUrl('/login');
  }

  private handleErrors(errors: any): void {
    this.errors = errors.error.errors;
    console.log(this.errors);
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
