import { Component } from '@angular/core';
import { TodoEntryComponent } from "./Components/todo-entry/todo-entry.component";
import { TodoListComponent } from "./Components/todo-list/todo-list.component";

@Component({
    selector: 'app-todo-app',
    standalone: true,
    templateUrl: './todo-app.component.html',
    styleUrl: './todo-app.component.css',
    imports: [TodoEntryComponent, TodoListComponent]
})
export class TodoAppComponent {

}
