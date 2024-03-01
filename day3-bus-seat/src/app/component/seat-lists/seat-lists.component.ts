import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-lists.component.html',
  styleUrl: './seat-lists.component.scss'
})
export class SeatListsComponent {
  arr : any = []
  selectedList : number[] = [7,8,1,2]

  ngOnInit(){
    for(let i = 0 ; i< 10;i++){
      if(this.selectedList.includes(i)){
      this.arr.push({selected : true})
      }else{
        this.arr.push({selected : false})
      }
    }
  }

  select (val : number){
    if(this.selectedList.includes(val)) return;
    let check = this.arr[val]
    if(check.selected){
    this.arr[val] = {selected : false}
    return;
    }
    this.arr[val] = {selected : true}
  }
}
