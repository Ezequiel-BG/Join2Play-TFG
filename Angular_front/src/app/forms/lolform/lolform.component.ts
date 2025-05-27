import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { GamesServiceService } from '../../services/games.service.service';
import { disableDebugTools } from '@angular/platform-browser';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-lolform',
  imports: [ReactiveFormsModule],
  templateUrl: './lolform.component.html',
  styleUrl: './lolform.component.css'
})
export class LolformComponent {
  @Output() closeModal = new EventEmitter<void>();
  registerForm: FormGroup;
  errors: any;
  updating: boolean = false;
  id_usuario_videojuego = null;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private gameService: GamesServiceService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    const userId = this.authService.getUserId();
  
    this.registerForm = this.fb.group({
      username: [''],
      posicion: [''],
      rango: [''],
      idiomas: [''],
      descripcion: [''],
      contacto: [''],
      user: [userId],
      game: [1]
    });

    this.userService.userSubscription(userId, 'league of legends').subscribe((response: any) => {
      if (response.data) {
        this.updating = true
        this.id_usuario_videojuego = response.data.id_usuario_videojuego
        this.registerForm.patchValue(response.data);
      }
    });
  }

  close() {
    this.closeModal.emit();
  }

  onSubmit() {
    if (this.updating) {
      this.userService.updateLolUser(this.registerForm.value, this.id_usuario_videojuego).subscribe({
        next: response => {
          this.handleResponse(response);
          this.close();
        },
        error: error => this.handleErrors(error),
        complete: () => this.alertService.showSuccess('Datos actualizados correctamente')
      });
    } else {
      this.userService.createLolUser(this.registerForm.value).subscribe({
        next: response => {
          this.handleResponse(response);
          this.close();
        },
        error: error => this.handleErrors(error),
        complete: () => this.alertService.showSuccess('Datos registrados correctamente')
      });
    }
  }

  handleResponse(response: any): void {
    console.log(response.message);
  }

  private handleErrors(errors: any): void {
    this.errors = errors.error?.errors || { general: 'Error al enviar el formulario.' };
    console.log(this.errors);
  }
}
