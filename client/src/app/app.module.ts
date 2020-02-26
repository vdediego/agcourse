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
import { ListingSectionComponent } from './components/listing-section/listing-section.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    declarations: [
        AppComponent,
        SeasonSelectorComponent,
        WateringSelectorComponent,
        SpeciesSelectorComponent,
        ClimateSelectorComponent,
        LocationSelectorComponent,
        ListingSectionComponent,
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
