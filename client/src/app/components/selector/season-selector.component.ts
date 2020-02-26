import {Component, Input, OnInit} from '@angular/core';
import {OptionsInterface} from '../../interfaces/options';
import {Seasons} from '../../classes/seasons';

@Component({
    selector: 'app-season-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})

export class SeasonSelectorComponent {
    private optionObj = new Seasons();

    getTitle(): string {
        return this.optionObj.getTitle();
    }

    getAllOptions(): OptionsInterface[] {
        return this.optionObj.getAllPossibleOptions();
    }
}

