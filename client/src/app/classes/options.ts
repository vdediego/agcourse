import {OptionsInterface} from '../interfaces/options';

export class Options {

    title: string;
    allOptions: OptionsInterface[];

    getTitle() {
        return this.title;
    }

    getAllPossibleOptions() {
        return this.allOptions;
    }
}
