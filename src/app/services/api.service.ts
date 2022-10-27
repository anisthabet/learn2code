import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-10-27&sortBy=popularity&apiKey=65ce57d9e11f4bb7a035c85269022020';
  constructor(private httpClient: HttpClient) { }



  getPosts(){
    return this.httpClient.get(this.url);
  }
}
