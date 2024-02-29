import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SeatListsComponent} from '../app/component/seat-lists/seat-lists.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SeatListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'day3-bus-seat';
}
