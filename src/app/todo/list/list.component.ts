import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoFormType } from '../addtodo/addtodo.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  @ViewChild('deleteTodoModal', { static: true }) deleteTodoModal: TemplateRef<any> | undefined;

  todos: string[] = [];
  
  updateTodoForm: FormGroup = new FormGroup<TodoFormType>({
    newTodo: new FormControl('', [Validators.required]),
    index: new FormControl(null),
  })
  constructor(
    private todoService: TodoService,
    public modalService: NgbModal) {}
  ngOnInit(): void {
    this.todoService.getTodosObservable().subscribe((updatedTodos) => {
      console.log(updatedTodos);
      this.todos = updatedTodos;
    });
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
    this.todoService.removeTodoByIndex(index, todo);
    this.todos = this.todoService.getTodos();
  }
}
