import { Component, OnInit, Input } from '@angular/core';
import { TODO_MODEL } from '../../models/todo.model';

@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Input() todos: TODO_MODEL[] = [];

}
