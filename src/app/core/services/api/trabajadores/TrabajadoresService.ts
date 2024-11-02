import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {ProductoResponse} from "../productos/ProductoResponse";
import {ENDPOINTS} from "../ENDPOINTS";
import {TrabajadoresResponse} from "./TrabajadoresResponse";

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  constructor(private http: HttpClient) { }

  getTrabajadoresById(id: number | string): Observable<TrabajadoresResponse[]> {
    return this.http.get<TrabajadoresResponse[]>(
      `${this.apiUrl}${ENDPOINTS.TRABAJADORES.GET_BY_ID(id)}`)
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.error('error en el servicio', error)
          throw error
        })

    )
  }
}
