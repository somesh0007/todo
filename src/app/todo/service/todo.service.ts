import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<string[]>([]);

  constructor() {
    this.loadFromLocalStorage();
  }

  addTodo(todo: string) {
    this.todosSubject.next([...this.getTodos(), todo])
    this.updateLocalStorage();
  }

  getTodos(): string[] {
    return this.todosSubject.getValue();
  }

  public loadFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todosSubject.next(JSON.parse(storedTodos))
    }
  }

  public updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.getTodos()));
  }

  clearAll() {
    this.todosSubject.next([]);
    this.updateLocalStorage();
  }

  getTodosObservable() {
    return this.todosSubject.asObservable();
  }

  removeTodoByIndex(index: number, todo: string) {
    if (index >= 0 && index < this.getTodos().length) {
      const todos = this.getTodos().filter((todo, i) => i !== index); 
      this.todosSubject.next(todos); 
      this.updateLocalStorage(); 
    }
  }
}
