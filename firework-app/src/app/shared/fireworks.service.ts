import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
  export class FireworksService {
  private url = 'api/fireworks';

  constructor(private http: Http) { }

  getFireworks() {
    return this.http.get(this.url)
    .map(res=> res.json())
  }
}
