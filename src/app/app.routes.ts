import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './Pages/todo-app/todo-app.component';
import { CalculateAppComponent } from './Pages/calculate-app/calculate-app.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'home', component: HomeComponent },
    { path: 'calculate-app', component: CalculateAppComponent },
    { path: 'todo-app', component: TodoAppComponent },
    { path: '**', component: PageNotFoundComponent },
];
