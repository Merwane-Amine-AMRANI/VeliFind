import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {MapsComponent} from './components/maps/maps.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'velibs/home',
    pathMatch: 'full'
  },
  {
    path: 'velibs',
    redirectTo: 'velibs/home',
    pathMatch: 'full'
  },
  {
    path: 'velibs/list',
    component: ListComponent,
  },
  {
    path: 'velibs/maps',
    component: MapsComponent,
  },
  {
    path: 'velibs/home',
    component: HomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
