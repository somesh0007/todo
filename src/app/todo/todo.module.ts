import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddtodoComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }