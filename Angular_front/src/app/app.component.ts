import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './shared/index/index.component';
import { GlobalAlertComponent } from "./shared/global-alert/global-alert.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent, FooterComponent, GlobalAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_front';
}
