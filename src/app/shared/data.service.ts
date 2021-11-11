import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    new Todo(`this is a test!`, true),
    new Todo(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id
    iusto qui libero, culpa nulla consectetur nisi hic facere quis, eum
    voluptas reprehenderit quasi voluptatibus dolor alias placeat natus
    quo?`),
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
