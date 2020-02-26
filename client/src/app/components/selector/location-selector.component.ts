import {Component, Input, OnInit} from '@angular/core';
import {OptionsInterface} from '../../interfaces/options';
import {Location} from '../../classes/location';

@Component({
    selector: 'app-location-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})

export class LocationSelectorComponent {
    private optionObj = new Location();

    getTitle(): string {
        return this.optionObj.getTitle();
    }

    getAllOptions(): OptionsInterface[] {
        return this.optionObj.getAllPossibleOptions();
    }
}

