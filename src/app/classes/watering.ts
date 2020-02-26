import {Options} from './options';
import {OptionsInterface} from '../interfaces/options';

export class Watering extends Options {
    title = 'Watering';
    allOptions: OptionsInterface[] = [
        {value: '0', viewValue: 'High'},
        {value: '1', viewValue: 'Medium'},
        {value: '2', viewValue: 'Low'},
    ];
}
