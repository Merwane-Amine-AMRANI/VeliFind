import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'velibs',
    pathMatch: 'full'
  },
  {
    path: 'velibs',
    component: ListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
