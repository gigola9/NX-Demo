import { Component, Input, OnInit } from '@angular/core';
import { Todo } from "@bike-store/data";

@Component({
  selector: 'bike-store-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos!: Todo[];
}
