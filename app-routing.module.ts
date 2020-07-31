import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent }  from './todo/todo.component';


const routes: Routes = [ //canActivate, RouteGuardService - allows for routes to only be activated when user is logged in
  {path: '', component: LoginComponent}, //default path goes to the login component
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]}, //adding name as a parameter being passed in
  {path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]}, //For each RouteGuardService the system is checking user logged in
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},

  {path: '**', component: ErrorComponent} //** is saying that the above are the defined paths, and anything else route to the error message */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
