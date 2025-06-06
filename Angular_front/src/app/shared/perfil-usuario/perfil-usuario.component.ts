import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-perfil-usuario',
  imports: [ReactiveFormsModule, CommonModule, ConfirmationModalComponent],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  @Output() cerrarUserModal = new EventEmitter<void>();

  form!: FormGroup;
  loading: boolean = true;
  errors: any;
  userData: any;
  userName: any;
  userEmail: any;
  isLolUser: boolean = false;
  isValorantUser: boolean = false;
  isFortniteUser: boolean = false;
  userId: number;
  showConfirmationModal = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    });

    this.userData = localStorage.getItem('user')
    this.userName = JSON.parse(this.userData).name
    this.userEmail = JSON.parse(this.userData).email
    this.userId = JSON.parse(this.userData).id
    this.userService.userSubscription(this.userId, 'league of legends').subscribe((response: any) => {
      if (response.data) {
        this.isLolUser = true
      }
      this.loading = false
    })

    this.userService.userSubscription(this.userId, 'valorant').subscribe((response: any) => {
      if (response.data) {
        this.isValorantUser = true
      }
      this.loading = false
    })

    this.userService.userSubscription(this.userId, 'fortnite').subscribe((response: any) => {
      if (response.data) {
        this.isFortniteUser = true
      }
      this.loading = false
    })
  }

  guardar() {
    const nombre = this.form.get('name')?.value;
    const email = this.form.get('email')?.value;

    if (!nombre) {
      this.form.get('name')?.setValue(this.userName);
    }

    if (!email) {
      this.form.get('email')?.setValue(this.userEmail);
    }

    if (email || nombre) {
      this.userService.updateUser(this.form.value, this.userId).subscribe({
        next: response => {
          this.handleResponse(response);
          this.authService.logout();
          this.tokenService.revokeToken();
          window.location.href = '/login';
        },
        error: error => this.handleErrors(error),
        complete: () => this.alertService.showSuccess('Datos actualizados correctamente')
      });
    }

    this.cerrar()
  }

  handleResponse(response: any) {
    console.log(response.message)
  }

  handleErrors(error: any) {
    this.errors = this.errors.error?.errors || { general: 'Error al enviar el formulario.' };
    console.log(this.errors)
  }

  revokeSuscription(game_id: number) {
    this.userService.revokeSuscription(this.userId, game_id).subscribe({
      next: response => {
        this.handleResponse(response);
      },
      error: error => this.handleErrors(error),
      complete: () => this.alertService.showError('Suscripción anulada')
    });
  }

  revokeUser() {
    this.userService.destroyUser(this.userId, false).subscribe({
      next: response => {
        window.location.href = '/'
        this.handleResponse(response);
      },
      error: error => this.handleErrors(error),
      complete: () => this.alertService.showError('Usuario elimado permanentemente')
    });
  }

  cerrar() {
    this.cerrarUserModal.emit();
  }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  openConfirmationModal(userId: number) {
    this.showConfirmationModal = true;
  }
}
