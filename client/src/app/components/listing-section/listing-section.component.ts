import {Component, OnInit} from '@angular/core';
import {PlantsService} from '../../services/plants.service';

@Component({
    selector: 'app-listing-section',
    templateUrl: './listing-section.component.html',
    styleUrls: ['./listing-section.component.scss']
})
export class ListingSectionComponent implements OnInit {

    public plants: any = [];

    constructor(private plantsService: PlantsService) { }

    ngOnInit(): void {
        // Fetch all plants
        this.plantsService.getAllPlants(false)
            .subscribe(
                response => {
                    const items: any = response;
                    items.forEach((plant, index) => {
                        // Building a Tile out of plant record
                        const tileSize = this.getTileSizeConf(index + 1);
                        this.plants.push({
                            cols: tileSize.cols,
                            rows: tileSize.rows,
                            header: plant.name,
                            imageFile: plant.image_filename
                        });
                    });

                },
                err => console.error(err)
            );
    }

    private getTileSizeConf(picIndex) {
        switch (picIndex) {
            case 1:
            case 2:
                return {
                    'cols': 2,
                    'rows': 2
                };
            case 3:
                return {
                    'cols': 4,
                    'rows': 5,
                };
            case 4:
            case 5:
            case 6:
                return {
                    'cols': 4,
                    'rows': 3,
                };
        }
    }
}
