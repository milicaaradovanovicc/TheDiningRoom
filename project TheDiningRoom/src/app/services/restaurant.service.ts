import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantsList } from '../model/restaurant.model';
import { Observable, map } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getAll(params?: any): Observable<RestaurantsList> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', params.page || 1)
          .set('pageSize', params.pagesize || 9)
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(`${baseUrl}restaurants`, queryParams).pipe(
      map((data: any) => {
        return new RestaurantsList(data);
      })
    );
  }
}
