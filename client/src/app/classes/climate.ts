import {Options} from './options';
import {OptionsInterface} from '../interfaces/options';

export class Climate extends Options {
    title = 'Climate';
    allOptions: OptionsInterface[] = [
        {value: '0', viewValue: 'Tropical'},
        {value: '1', viewValue: 'Temperate'},
        {value: '2', viewValue: 'Polar'},
        {value: '3', viewValue: 'Dry'},
        {value: '4', viewValue: 'Cold'},
    ];
}
