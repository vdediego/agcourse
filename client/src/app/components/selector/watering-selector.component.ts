import {Component, Input, OnInit} from '@angular/core';
import {OptionsInterface} from '../../interfaces/options';
import {Watering} from '../../classes/watering';

@Component({
    selector: 'app-watering-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})

export class WateringSelectorComponent {
    private optionObj = new Watering();

    getTitle(): string {
        return this.optionObj.getTitle();
    }

    getAllOptions(): OptionsInterface[] {
        return this.optionObj.getAllPossibleOptions();
    }
}

