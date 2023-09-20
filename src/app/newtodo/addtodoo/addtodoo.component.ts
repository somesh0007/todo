import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface TodoFormType {
  newTodo: FormControl<string | null>,
  index: FormControl<number | null>;
}
@Component({
  selector: 'app-add-todoo',
  templateUrl: './addtodoo.component.html',
  styleUrls: ['./addtodoo.component.css']
})
export class AddtodooComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  todoForm = new FormGroup<TodoFormType>({
    newTodo: new FormControl('', [Validators.required]),
    index: new FormControl(null),

  })

  constructor(
  ) { }

  addNewItem() {
    const newItemValue = this.todoForm.get('newTodo')?.value;
    if (newItemValue) {
      this.newItemEvent.emit(newItemValue);
      this.todoForm.reset();
    }
  }






  // addTodo() {

  //   if (this.todoForm.invalid) {
  //     alert("enter some values")
  //   } else {
  //     const todoValue = this.todoForm.getRawValue()
  //     const newTodo = todoValue.newTodo!
  //     // this.todoService.addTodo(newTodo);
  //     this.todoForm.reset();
  //   }
  // }

  clear() {
    this.todoForm.reset({ newTodo: '' });
  }

  // get todos() {
  //   // return this.todoService.getTodos()
  // }

  clearAll() {
    // this.todoService.clearAll()
  }
}
