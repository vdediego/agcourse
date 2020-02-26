import { Component, OnInit } from '@angular/core';


export interface Tile {
    header: string;
    footer: string;
    cols: number;
    rows: number;
    imageFile: string;
}

@Component({
  selector: 'app-listing-section',
  templateUrl: './listing-section.component.html',
  styleUrls: ['./listing-section.component.scss']
})
export class ListingSectionComponent implements OnInit {

    plants: Tile[] = [
        {imageFile: '', cols: 3, rows: 2, header: '', footer: ''},
        {imageFile: '', cols: 1, rows: 1, header: '', footer: ''},
        {imageFile: '', cols: 2, rows: 1, header: '', footer: ''},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
