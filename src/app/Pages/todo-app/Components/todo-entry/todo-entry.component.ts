import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.css'
})
export class TodoEntryComponent {
  TodoText:string="";
  AddTodo = ()=>{
    console.log(this.TodoText)
  }
}
