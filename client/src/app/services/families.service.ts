import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlantInterface} from '../models/plants';
import {Observable} from 'rxjs';
import {FamilyInterface} from '../models/families';

@Injectable({
    providedIn: 'root'
})
export class FamiliesService {

    private fullUrl = 'http://localhost:3000/families';

    constructor(private http: HttpClient) {
    }

    public getAllFamilies(): Observable<FamilyInterface> {
        return this.http.get(`${this.fullUrl}`);
    }

    public getFamilyNames(): Observable<FamilyInterface> {
        return this.http.get(`${this.fullUrl}/names`);
    }

    public getFamily(id: string) {
        return this.http.get(`${this.fullUrl}/${id}`);
    }

    public addFamily(plant: PlantInterface) {
        return this.http.post(`${this.fullUrl}`, plant);
    }

    public removeFamily(id: string) {
        return this.http.delete(`${this.fullUrl}/${id}`);
    }

    public updateFamily(id: string, updatedFamily: FamilyInterface): Observable<FamilyInterface> {
        return this.http.put(`${this.fullUrl}/${id}`, updatedFamily);
    }
}
