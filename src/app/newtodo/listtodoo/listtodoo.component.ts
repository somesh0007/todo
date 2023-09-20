import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoFormType } from '../addtodoo/addtodoo.component'; 

@Component({
  selector: 'app-list-todoo',
  templateUrl: './listtodoo.component.html',
  styleUrls: ['./listtodoo.component.css']
})
export class ListtodooComponent {
  @ViewChild('deleteTodoModal', { static: true }) deleteTodoModal: TemplateRef<any> | undefined;
  @Output() removeItemEvent = new EventEmitter<number>();
  @Output() editItemEvent = new EventEmitter<{ updatedTodo: string, index: number }>();
  constructor(private modalService: NgbModal){}

  @Input() items:string[] = [];

  updateTodoForm: FormGroup = new FormGroup<TodoFormType>({
    newTodo: new FormControl('', [Validators.required]),
    index: new FormControl(null),
  })
  addItem(newItem: string) {    
    this.items.push(newItem);
  }
  openDeleteModal(todo: any, index: number) {
    const modalRef = this.modalService.open(this.deleteTodoModal, { centered: true });
    modalRef.result.then((result) => {
      if (result === 'Remove') {
        this.removeItem(index)
        
      }
    }).catch((reason) => {

    })
  }

  
  removeItem(index:any) {
    this.removeItemEvent.emit(index);
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
    const index = this.updateTodoForm.value.index;
    this.editItemEvent.emit({ updatedTodo, index });

    console.log(updatedTodo);

    
    // // Update the todo in the todos array at the specified index
    // if (index >= 0 && index < this.items.length) {
    //   this.items[index] = updatedTodo;
    //   // this.todoService.updateLocalStorage()
     
    // }

    // Close the modal
    this.modalService.dismissAll();
  }
}
