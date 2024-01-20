import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NgForm } from '@angular/forms';
import { ResultComponent } from '../result/result.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';

@Component({
  selector: 'app-tracker-page',
  standalone: true,
  imports: [FormComponent, ResultComponent, TransactionListComponent],
  templateUrl: './tracker-page.component.html',
  styleUrl: './tracker-page.component.scss'
})
export class TrackerPageComponent {

  balance = 0;
  income = 0;
  expense = 0

  list :{title : string, amount  : number} [] = []

  onSubmit(form : NgForm){
    this.list.push(form.value)
    if(this.list[0]){
      this.calculate()
    }
  }

  calculate(){
    let income = 0
    let expense = 0

    for(let each of this.list){
      if(each.amount < 0){
        expense+= each.amount
      }else if (each.amount >= 0){
        income+= each.amount
      }
    }

    this.income = income
    this.expense = expense

    this.balance = income+expense

  }
}
