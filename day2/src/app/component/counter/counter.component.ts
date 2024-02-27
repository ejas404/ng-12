import { Component, signal } from '@angular/core';
import {BtnComponent} from '../btn/btn.component'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  actionLogs = signal<string[]>([]);
  counter  = signal(0)

  increment(){
    this.counter.update(val => val+1)
    this.actionLogs.update(val => [...val,"INCREMENT"])
  }

  decrement(){
    if(this.counter() <= 0) return;
    this.counter.update(val => val-1)
    this.actionLogs.update(val => [...val,"DECREMENT"])
  }
}
