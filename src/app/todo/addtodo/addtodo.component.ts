import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../service/todo.service';

export interface TodoFormType {
  newTodo: FormControl<string | null>,
  index: FormControl<number | null>;
}


@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {
  todoForm = new FormGroup<TodoFormType>({
    newTodo: new FormControl('', [Validators.required]),
    index: new FormControl(null),

  })
  // newTodo: string []= [];
  constructor(
    public modalService: NgbModal,
    private todoService: TodoService,
  ) {

   }
  addTodo() {

    if (this.todoForm.invalid) {
      alert("enter some values")
    } else {
      const todoValue = this.todoForm.getRawValue()
      const newTodo = todoValue.newTodo!
      this.todoService.addTodo(newTodo);
      this.todoForm.reset();
    }
  }
  clear() {
    this.todoForm.reset({ newTodo: '' });
  }

  get todos() {
    return this.todoService.getTodos()
  }
  

  clearAll() {
    this.todoService.clearAll()
  }
}
