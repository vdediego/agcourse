import {OptionsInterface} from '../interfaces/options';

export class Options {

    private title: string;
    private allOptions: OptionsInterface[];

    getTitle() {
        return this.title;
    }

    getAllPossibleOptions() {
        return this.allOptions;
    }
}
