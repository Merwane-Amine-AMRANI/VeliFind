import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StationsService {

  private url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=1000&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes';


  constructor(private http: HttpClient) {
  }

  getAllStation(): Observable<any> {
    return this.http.get<any>(this.url); }

  // @ts-ignore
  /*    searchStation(stationName: string): Observable<Station>{
         return  this.http.get<any>('this.url'+);
     }
}*/








}

