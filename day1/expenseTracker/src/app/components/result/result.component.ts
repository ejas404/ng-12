import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  @Input() balance !: number ;
  @Input() income !: number ;
  @Input() expense !: number ;

}
