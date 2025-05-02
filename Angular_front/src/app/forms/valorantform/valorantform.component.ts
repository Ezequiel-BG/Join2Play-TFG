import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-valorantform',
  imports: [],
  templateUrl: './valorantform.component.html',
  styleUrl: './valorantform.component.css'
})
export class ValorantformComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  onSubmit() {
    console.log('Formulario entregado');
    this.close();
  }
}
