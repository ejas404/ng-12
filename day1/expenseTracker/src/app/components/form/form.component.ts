import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output()submit = new EventEmitter()

  onFormSubmit(form : NgForm , event : Event){
    event.stopPropagation()
    this.submit.emit(form)
    form.form.reset()
  }
}
