import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../Models/fruit';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  url :string = "http://localhost:49564/Fruit/All";

  
  constructor(private httpClient : HttpClient) { 
    
  }

  public getAllFruits() : Observable<Fruit[]>{
    return this.httpClient.get<Fruit[]>(this.url);
  }

  public getFruit(id : number) : Observable<Fruit>{
    const tempUrl = 'http://localhost:49564/Fruit/' + id;
    return this.httpClient.get<Fruit>(tempUrl);
  }

  public updateFruit(fru : Fruit) : Observable<string>{
    const tempUrl = 'http://localhost:49564/Fruit'
    return this.httpClient.put<string>(tempUrl, fru);
  } 

  public addFruit(fru : Fruit) :Observable<string>{
    const tempUrl = 'http://localhost:49564/Fruit'
    return this.httpClient.post<string>(tempUrl, fru);
  }

  public deleteFruit(id : Number) :Observable<string>{
    const tempUrl = 'http://localhost:49564/Fruit/' + id;
    return this.httpClient.delete<string>(tempUrl);
  }


}
