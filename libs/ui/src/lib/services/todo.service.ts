import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TODO_MODEL } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getToDo(): Observable<TODO_MODEL[]> {
    return this.http.get<TODO_MODEL[]>(this.url + 'todos')
  }

  postToDo(newTodo: TODO_MODEL): Observable<TODO_MODEL> {
    return this.http.post<TODO_MODEL>(this.url + 'todos', newTodo)
  }
}
