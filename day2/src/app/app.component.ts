import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from '../app/component/counter/counter.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals counter';
}
