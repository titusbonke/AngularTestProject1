import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoEntryComponent } from "./todo-entry.component";
import { TodoListComponent } from "./todo-list.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo-app',
    standalone: true,
    // templateUrl: './todo-app.component.html',
    // styleUrl: './todo-app.component.css',
    template: `<div class="container p-5">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card w-md-50 w-100 ">
                <div class="card-body">
                    <h5 class="card-title">Todo App</h5>
                    <app-todo-entry [AddTodo]="AddTodo" ></app-todo-entry>
                    <app-todo-list [(Lists)]="Lists"></app-todo-list>
                </div>
            </div>
        </div>
    </div>
</div>`,
    imports: [TodoEntryComponent, TodoListComponent, FormsModule]
})
export class TodoAppComponent {
    Lists: TodoListClass[] = []

    // update:boolean=false;
    AddTodo = (a: string) => {
        this.Lists.push({ id: this.Lists.length, Note: a })
        document.getElementById('TodoEntry')?.focus();
    }

    // UpdateTodo= (id: string) => {
    //     this.Lists.push({ id: this.Lists.length, Note: a })
    // }


}
export class TodoListClass {
    id: number = 0
    Note: string = ""
    Completed?: boolean = false
}