import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlantInterface} from '../models/plants';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlantsService {

    private fullUrl = 'http://localhost:3000/plants';

    constructor(private http: HttpClient) {
    }

    public getAllPlants(verbose: boolean = false) {
        if (verbose) {
            return this.http.get(`${this.fullUrl}`);
        } else {
            return this.http.get(`${this.fullUrl}/min`);
        }
    }

    public getPlant(id: string) {
        return this.http.get(`${this.fullUrl}/${id}`);
    }

    public addPlant(plant: PlantInterface) {
        return this.http.post(`${this.fullUrl}`, plant);
    }

    public removePlant(id: string) {
        return this.http.delete(`${this.fullUrl}/${id}`);
    }

    public updatePlant(id: string, updatedPlant: PlantInterface): Observable<PlantInterface> {
        return this.http.put(`${this.fullUrl}/${id}`, updatedPlant);
    }
}
