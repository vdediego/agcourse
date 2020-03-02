import { Component, OnInit } from '@angular/core';
import {PlantsService} from '../../services/plants.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
  }

}
