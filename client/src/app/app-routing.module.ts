import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateFormComponent} from './components/create-form/create-form.component';
import {HomeComponent} from './components/pages/home/home.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'plants',
        pathMatch: 'full'
    },
    {
        path: 'plants',
        component: HomeComponent
    },
    {
        path: 'plants/create',
        component: CreateFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
