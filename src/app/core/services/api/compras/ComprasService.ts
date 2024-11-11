

//hacemos injectable el servicio
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {ProductoResponse} from "../productos/ProductoResponse";
import {ENDPOINTS} from "../ENDPOINTS";
import {ComprasResponse} from "./ComprasResponse";

@Injectable({
  providedIn: 'root'
})

//declaramos la clase
export class ComprasService{
  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  //un contructor de httpclientr
  constructor(private http: HttpClient) { }

  getComprasById(id: number | string): Observable<ComprasResponse[]> {
    return this.http.get<ComprasResponse[]>(
      `${this.apiUrl}${ENDPOINTS.COMPRAS.GET_BY_ID(id)}`
    ).pipe(
      tap(response => console.log('Respuesta del vista-compra:', response)),
      catchError(error => {
        console.error('Error en el servicio ', error)
        throw error
      })
    );
  }
}
