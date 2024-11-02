import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {response} from "express";
import {ProductoResponse} from "../productos/ProductoResponse";
import {ENDPOINTS} from "../ENDPOINTS";

@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {
  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  constructor(private http: HttpClient) { }

  getProvedoresByID(id: number | string): Observable<ProductoResponse[]> {
    return this.http.get<ProductoResponse[]>
    (`${this.apiUrl}${ENDPOINTS.PROVEDORES.GET_BY_ID(id)}`
    ).pipe(
      tap(response => console.log(response)),
      catchError(error => {
        console.error('error en el servicor', error)
        throw error
      })
    );
  }
}
