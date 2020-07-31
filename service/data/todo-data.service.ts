import { API_URL, TODO_JPA_API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient //allows http call
  ) { }

  retrieveAllTodos(username){ //retrieve all of the todos for a given user - based on username
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`) //when using <> similar to generics in JAVA - expecting this kind of response back
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username, id){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo){
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo){
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }

}
