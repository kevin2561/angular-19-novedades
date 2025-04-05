import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../entity/Categoria';
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url: string = "https://api-rest-doctor-pc-render-production.up.railway.app/categoria";
  private http = inject(HttpClient)
  // constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.url}/get`)

  }
}
