import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('../app/todo/todo.module').then(m => m.TodoModule),
  },
  {
    path: 'newtodo',
    loadChildren: () => import('../app/newtodo/newtodo.module').then(m => m.NewtodoModule),
  }
  ,
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
