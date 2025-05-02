import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-finder',
  imports: [NgIf, RouterLink],
  templateUrl: './team-finder.component.html',
  styleUrl: './team-finder.component.css'
})
export class TeamFinderComponent {
  isAuthenticated = inject(TokenService).isAuthenticated();
  errors: any;
  loading: boolean = true;

  constructor () {
    window.scrollTo(0,0)
  }
}
