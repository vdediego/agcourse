import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {FamiliesSelectorComponent} from './components/selector/families-selector.component';
import {ListingSectionComponent} from './components/listing-section/listing-section.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {CreateFormComponent} from './components/create-form/create-form.component';
import {PlantsService} from './services/plants.service';
import {HttpClientModule} from '@angular/common/http';
import {FamiliesService} from './services/families.service';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {TopNavigationComponent} from './components/top-navigation/top-navigation.component';
import {HomeComponent} from './components/pages/home/home.component';
import {CreatePlantComponent} from './components/pages/create/create-plant/create-plant.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
    declarations: [
        AppComponent,
        FamiliesSelectorComponent,
        ListingSectionComponent,
        CreateFormComponent,
        TopNavigationComponent,
        TopNavigationComponent,
        HomeComponent,
        CreatePlantComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        FormsModule,
        MatSelectModule,
        MatGridListModule,
        HttpClientModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonToggleModule
    ],
    providers: [
        PlantsService,
        FamiliesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
