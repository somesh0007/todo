import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface TodoFormType {
  newTodo: FormControl<string | null>,
  index: FormControl<number | null>;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('deleteTodoModal', { static: true }) deleteTodoModal: TemplateRef<any> | undefined;

  todoForm = new FormGroup<TodoFormType>({
    newTodo: new FormControl('', [Validators.required]),
    index: new FormControl(null),

  })
  updateTodoForm: FormGroup = new FormGroup<TodoFormType>({
    newTodo: new FormControl('', [Validators.required]),
    index: new FormControl(null),
  })

  todos: string[] = [];

  constructor(
    public modalService: NgbModal,
  ) { }
  ngOnInit() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo() {
    if (this.todoForm.invalid) {
      alert("enter some values")
    } else {
      const val = this.todoForm.getRawValue()
      const title = val.newTodo!

      this.todos.push((title));
      this.todoForm.reset({ newTodo: '' });
      this.updateLocalStorage();
    }
  }
  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }


  // editTodo(index: number) {
  //   const updatedTodo = prompt("Edit the to-do:", this.todos[index]);

  //   if (updatedTodo !== null) {
  //     this.todos[index] = updatedTodo;
  //   }
  // }

  clear() {
    this.todoForm.reset({ newTodo: '' });
  }

  clearAll() {
    this.todos = []
    this.updateLocalStorage()
  }

  openTodoEditModal(content: TemplateRef<any>, index: number, val: string) {

    this.updateTodoForm.patchValue({
      newTodo: val,
      index: index
    })
    this.modalService.open(content, { centered: true, size: 'md' }).result.finally(() => {
      this.updateTodoForm.reset({
        newTodo: '',

      });
    });
  }

  submitEditTodoModal() {
    const updatedTodo = this.updateTodoForm.value.newTodo;
    console.log(updatedTodo);

    const index = this.updateTodoForm.value.index;
    // Update the todo in the todos array at the specified index
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
      this.updateLocalStorage();
    }

    // Close the modal
    this.modalService.dismissAll();
  }

  openDeleteModal(todo: any, index: number) {
    const modalRef = this.modalService.open(this.deleteTodoModal, { centered: true });
    modalRef.result.then((result) => {
      if (result === 'Remove') {
        this.removeTodo(todo, index)
      }
    }).catch((reason) => {

    })
  }

  removeTodo(todo: any, index: number) {
    this.todos = this.todos.filter((todo, i) => i !== index);
    this.updateLocalStorage()
  }

}
