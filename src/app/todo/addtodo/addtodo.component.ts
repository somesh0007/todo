import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface TodoFormType {
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
  todos: string[] = [];
  newTodo: string = '';
  constructor(
    public modalService: NgbModal,

  ) { }
  addTodo() {
    if (this.todoForm.invalid) {
      alert("enter some values")
    } else {
      const val = this.todoForm.getRawValue()
      const title = val.newTodo!

      this.todos.push((title));
      this.todoForm.reset({ newTodo: '' });
      // this.updateLocalStorage();
    }
  }
  clear() {
    this.todoForm.reset({ newTodo: '' });
  }

  clearAll() {
    this.todos = []
    // this.updateLocalStorage()
  }
}
