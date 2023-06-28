import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getData(apiUrl:any) {
    return this.http.get( apiUrl).pipe(map((data) => data));
  }


  saveData(apiUrl:any,data:any){
    return this.http.post(apiUrl,data).pipe(map((result)=>result))


  }

 
  editData(apiUrl:any ,data:any){
    return this.http.put(apiUrl,data).pipe(map((result)=>result))

  }

 
}
