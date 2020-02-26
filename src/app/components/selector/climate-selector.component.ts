import {Component, Input, OnInit} from '@angular/core';
import {OptionsInterface} from '../../interfaces/options';
import {Seasons} from '../../classes/seasons';
import {Climate} from '../../classes/climate';

@Component({
    selector: 'app-climate-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})

export class ClimateSelectorComponent {
    private optionObj = new Climate();

    getTitle(): string {
        return this.optionObj.getTitle();
    }

    getAllOptions(): OptionsInterface[] {
        return this.optionObj.getAllPossibleOptions();
    }
}

