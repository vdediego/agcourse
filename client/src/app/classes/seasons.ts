import {Options} from './options';
import {OptionsInterface} from '../interfaces/options';

export class Seasons extends Options {
    title = 'Seasons';
    allOptions: OptionsInterface[] = [
        {value: '0', viewValue: 'Winter'},
        {value: '1', viewValue: 'Spring'},
        {value: '2', viewValue: 'Summer'},
        {value: '3', viewValue: 'Autumn'},
    ];
}
