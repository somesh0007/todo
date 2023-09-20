import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() clearAllItemEvent = new EventEmitter<string[]>();

  @Input() set setItems(items: string[]) {
    this._items = items;
  }

  get setItems() {
    return this._items;
  }
  
  _items: string[] = []

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

  clear() {
    this.todoForm.reset({ newTodo: '' });
  }

 
  clearAll(){
    this._items = []
    this.clearAllItemEvent.emit(this._items)
  }
 
}
