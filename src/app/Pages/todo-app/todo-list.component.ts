import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListClass } from './todo-app.component';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div *ngFor="let item of Lists" class="card m-1">
    <div class="card-body">
      <div class="row">
        <div class="col">
        <h5 class="card-title">{{item.id+1}} {{ item.Note}}</h5>    
        </div>
        <div class="col text-right d-flex justify-content-end">
       
          <!-- <button class="btn btn-secondary"  (click)="CompleteTodo(item.id)">Complete</button>: -->
          <!-- <button class="btn btn-secondary"  (click)="CompleteTodo(item.id)">Un Complete</button>; -->
          <!-- <button class="btn btn-warning"  (click)="UpdateTodo(item.id)">Update</button> -->
          <button class="btn btn-danger"  (click)="Delete(item.id)">Delete</button>
        </div>
      </div>
   </div>
  </div>
`
})
export class TodoListComponent {
  @Input() Lists: TodoListClass[] = [];
  @Output() ListsChange = new EventEmitter<TodoListClass[]>();

  Delete = (id: number) => {
    this.Lists = this.Lists.filter(a => a.id != id)
    this.Lists.map((item, index) => {
      item.id = index;
    })
    console.log(this.Lists)
    this.ListsChange.emit(this.Lists)
    document.getElementById('TodoEntry')?.focus();
  }
}

