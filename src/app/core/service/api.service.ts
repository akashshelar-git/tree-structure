import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMenuMastersResponce } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getMenuMasters() {
    return this.http.get<IMenuMastersResponce>(`${environment.APIHOST}${'MenuMasters/GetMenuMasterList/173'}`)
  }
}
