import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {CreatePlantComponent} from './components/pages/create/create-plant/create-plant.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'plants',
        pathMatch: 'full'
    },
    {
        path: 'plants',
        component: HomeComponent,
        pathMatch: 'full'

    },
    {
        path: 'plants/create',
        component: CreatePlantComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
