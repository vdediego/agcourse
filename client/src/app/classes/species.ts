import {Options} from './options';
import {OptionsInterface} from '../interfaces/options';

export class Species extends Options {
    title = 'Species';
    allOptions: OptionsInterface[] = [
        {value: '0', viewValue: 'Fruit trees'},
        {value: '1', viewValue: 'Vegetables'},
        {value: '2', viewValue: 'Aromatics'},
        {value: '3', viewValue: 'Flowers'},
    ];
}
