import {Component, Input, OnInit} from '@angular/core';
import {OptionsInterface} from '../../interfaces/options';
import {Species} from '../../classes/species';

@Component({
    selector: 'app-species-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})

export class SpeciesSelectorComponent {
    private optionObj = new Species();

    getTitle(): string {
        return this.optionObj.getTitle();
    }

    getAllOptions(): OptionsInterface[] {
        return this.optionObj.getAllPossibleOptions();
    }
}

