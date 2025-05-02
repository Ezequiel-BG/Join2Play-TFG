import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fortniteform',
  imports: [],
  templateUrl: './fortniteform.component.html',
  styleUrl: './fortniteform.component.css'
})
export class FortniteformComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  onSubmit() {
    console.log('Formulario entregado');
    this.close();
  }
}
