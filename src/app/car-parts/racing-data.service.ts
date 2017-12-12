import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CarPart } from './car-part';

@Injectable()
export class RacingDataService {
  
  constructor(private http: Http) { }
  
  getCarParts() {
    return this.http.get('https://sucide-squad-api.herokuapp.com/api/v1/products'/*'../app/car-parts.json'*/)
               .map(response => /*<CarPart[]>*/response.json().data);
  }
}