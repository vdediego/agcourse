import {Component, OnInit} from '@angular/core';
import {FamiliesService} from '../../services/families.service';

@Component({
    selector: 'app-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

    constructor(private familiesService: FamiliesService) { }

    ngOnInit(): void {

    }

}
