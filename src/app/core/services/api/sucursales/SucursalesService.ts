import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {response} from "express";
import {SucursalesResponse} from "../sucursales/SucursalesResponse";
import {ENDPOINTS} from "../ENDPOINTS";

@Injectable({
  providedIn: 'root'
})

export class SucursalesService {
  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  constructor(private http: HttpClient) { }

  getSucursalesByID(id: number | string): Observable<SucursalesResponse[]> {
    return this.http.get<SucursalesResponse[]>(
      `${this.apiUrl}${ENDPOINTS.SUCURSALES.GET_BY_ID(id)}`)
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.error('error en el servicio', error)
          throw error
        })
    )
  }
}
