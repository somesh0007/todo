import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddtodooComponent } from './addtodoo/addtodoo.component';
import { ListtodooComponent } from './listtodoo/listtodoo.component';
import { NewtodoComponent } from './newtodo.component';

const routes: Routes = [
  {
    path: '',
    component: NewtodoComponent,
    children: [
      {
        path: '',
        component: AddtodooComponent,
      },
      {
        path: 'list-todo',
        component: ListtodooComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewtodoRoutingModule { }
