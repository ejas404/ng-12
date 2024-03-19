import { Component, Host, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  profileForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required)
  })


  onSubmit() {
    alert('form submitted')
  }

  @HostListener('window:keydown.enter', ['$event'])
  onKeyDown($event: any) {
    alert('enter clicked')
  }

  @HostListener('window:popstate', ['$event'])
  onBrowserLeave($event: any) {
    const confirmed = confirm('You have unsaved changes. Are you sure you want to leave?');
    if (!confirmed) {
      $event.preventDefault(); 
    }
  }

  // @HostListener('window:beforeunload',['$event'])
  // onLeave($event : any){
  //   if(this.profileForm.dirty){
  //     $event.preventDefault();
  //     $event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
  //   }
  // }

}
