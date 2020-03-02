import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {SeasonSelectorComponent} from './components/selector/season-selector.component';
import {WateringSelectorComponent} from './components/selector/watering-selector.component';
import {SpeciesSelectorComponent} from './components/selector/species-selector.component';
import {ClimateSelectorComponent} from './components/selector/climate-selector.component';
import {LocationSelectorComponent} from './components/selector/location-selector.component';
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

@NgModule({
    declarations: [
        AppComponent,
        SeasonSelectorComponent,
        WateringSelectorComponent,
        SpeciesSelectorComponent,
        ClimateSelectorComponent,
        LocationSelectorComponent,
        ListingSectionComponent,
        CreateFormComponent,
        TopNavigationComponent,
        TopNavigationComponent,
        HomeComponent
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
        MatInputModule
    ],
    providers: [
        PlantsService,
        FamiliesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
