import { Component ,  EventEmitter,  Input, Output} from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent {
  items: string[] = [];
  
  addItem(newItem: string) {
    this.items.push(newItem);
  }

  removeTodo(index: number) {
    this.items = this.items.filter((todo, i) => i !== index);
 }
 updateItem(eventData: { updatedTodo: string, index: number }) {
  const { updatedTodo, index } = eventData;
  
  if (index >= 0 && index < this.items.length) {
      this.items[index] = updatedTodo;
   
  }
 }
}
