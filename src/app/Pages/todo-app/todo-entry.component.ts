import { Component, Input,ViewChild,ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-entry',
  standalone: true,
  imports: [FormsModule],
  template:`
  <div class="input-group mb-3">
    <input type="text" id="TodoEntry" #TodoEntry class="form-control" placeholder="Enter Todo here .." aria-label="Enter Todo here .." aria-describedby="button-addon2" [(ngModel)]="TodoText"  >
    <button class="btn btn-outline-secondary" type="button" id="add-btn" (click)="AddTodoFunction()"  >Add</button>
  </div>
  `
})
export class TodoEntryComponent {
  // @ViewChild('TodoEntry') TodoEntry: ElementRef|undefined;
  TodoText="";
  @Input() AddTodo: Function=()=>{};

  AddTodoFunction(){
    this.AddTodo(this.TodoText)
    this.TodoText="";
    // console.log(this.TodoEntry)
    // if (this.TodoEntry) {
    //  this.TodoEntry.nativeElement.focus();
    // }
  }
  
  
}
