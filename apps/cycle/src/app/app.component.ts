import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from "@bike-store/data";
@Component({
  selector: 'bike-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cycle';
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((m) => (this.todos = m));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
