import {Component, Input, OnInit} from '@angular/core';
import {OptionsInterface} from '../../interfaces/options';
import {FamiliesService} from '../../services/families.service';

@Component({
    selector: 'app-families-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})

export class FamiliesSelectorComponent implements OnInit {

    public families: any = [];

    constructor(private familiesService: FamiliesService) { }

    ngOnInit(): void {
        this.familiesService.getFamilyNames()
            .subscribe(
                response => {
                    const items: any = response;
                    items.forEach(family => {
                            this.families.push(
                                {
                                    value: family.family_id,
                                    viewValue: family.name
                                }
                            );
                        },
                        err => console.error(err)
                    );
                });
    }

    getTitle(): string {
        return 'Family';
    }

    getAllOptions(): OptionsInterface[] {
        return this.families;
    }
}
