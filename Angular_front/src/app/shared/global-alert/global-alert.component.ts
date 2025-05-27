import { Component, inject } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-global-alert',
  imports: [NgIf, CommonModule],
  templateUrl: './global-alert.component.html',
  styleUrl: './global-alert.component.css'
})
export class GlobalAlertComponent {
  alertService = inject(AlertService)
}
