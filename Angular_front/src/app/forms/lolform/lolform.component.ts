import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lolform',
  imports: [],
  templateUrl: './lolform.component.html',
  styleUrl: './lolform.component.css'
})
export class LolformComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  onSubmit() {
    console.log('Formulario entregado');
    this.close();
  }
}
