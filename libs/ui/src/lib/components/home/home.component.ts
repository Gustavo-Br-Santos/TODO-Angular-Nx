import { Component, OnInit } from '@angular/core';
import { TODO_MODEL } from '../../models/todo.model';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'myorg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: TODO_MODEL[] = [];

  constructor( private todoService: ToDoService ){}

  ngOnInit(): void {
    this.iniToDO();

  }

  iniToDO(){
    this.todoService.getToDo().subscribe(
      todos => this.todos = todos
    )
  }

  addToDo(){
    this.todoService.postToDo({id: Math.floor(Math.random() * 1000), title: 'new Todo', description: 'description Todo'}).subscribe(
      () => this.iniToDO()
    )
  }
}
