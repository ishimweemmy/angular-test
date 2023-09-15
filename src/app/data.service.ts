import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '1ec3ae2effmsh9b7b0bd63e41943p1b26d6jsnef23ba11acd7',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const options = { headers: this.headers };
    return this.http.get(this.apiUrl, options);
  }
}
