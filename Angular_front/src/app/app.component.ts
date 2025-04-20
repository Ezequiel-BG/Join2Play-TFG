import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './shared/index/index.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_front';
}
