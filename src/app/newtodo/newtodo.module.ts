import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewtodoRoutingModule } from './newtodo-routing.module';
import { AddtodooComponent } from './addtodoo/addtodoo.component';
import { ListtodooComponent } from './listtodoo/listtodoo.component';
import { NewtodoComponent } from "./newtodo.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddtodooComponent,
    ListtodooComponent,
    NewtodoComponent,
  ],
  imports: [
    CommonModule,
    NewtodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewtodoModule { }
