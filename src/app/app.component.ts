import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todoForm = new FormGroup({
    newTodo: new FormControl('', Validators.required),
  })
  todos: any[] = [];
  constructor() { }
  ngOnInit() {

  }

  addTodo() {
    if (this.todoForm.invalid) {
      alert("enter some values")
    }
    else {
      const val = this.todoForm.getRawValue()
      const title = val.newTodo
      if(this.todos.includes(title)){
        alert("already exisit")
      }
      else{
        this.todos.push((title));
        this.todoForm.reset({ newTodo: '' });
        console.log(this.todoForm);
  
      }
      
    }

  }
  removeTodo(todo: string, index: number) {
    console.log(todo);

    this.todos = this.todos.filter((todo, i) => i !== index);
  }
  clear() {
    this.todoForm.reset({ newTodo: '' });
  }
  clearAll(){
    const newArray:any = []
    this.todos = newArray
  }
}
