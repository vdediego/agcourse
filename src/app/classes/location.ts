import {Options} from './options';
import {OptionsInterface} from '../interfaces/options';

export class Location extends Options {
    title = 'Location';
    allOptions: OptionsInterface[] = [
        {value: '0', viewValue: 'Indoor'},
        {value: '1', viewValue: 'Outdoor'},
    ];
}
