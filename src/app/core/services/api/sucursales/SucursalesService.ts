import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {response} from "express";
import {SucursalesResponse} from "../sucursales/SucursalesResponse";
import {ENDPOINTS} from "../ENDPOINTS";
import {ProvedoresResponse} from "../provedores/ProvedoresResponse";

@Injectable({
  providedIn: 'root'
})

export class SucursalesService {
  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  constructor(private http: HttpClient) { }

  // 1. Parámetro en la ruta (Path Parameter).
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

  // 2. Crear nuevo proveedor (POST).
  createSucursal(cliente: SucursalesResponse): Observable<SucursalesResponse> {
    return this.http.post<SucursalesResponse>(
      `${this.apiUrl}${ENDPOINTS.SUCURSALES.CREATE}`,
      cliente
    ).pipe(
      tap(response => console.log('Sucursal creada:', response)),
      catchError(error => {
        console.error('Error al crear la sucursal:', error);
        throw error;
      })
    );
  }

  // Eliminar una sucursal (delete).
  deleteSucursales(id: number | string) {
    return this.http.delete(
      `${this.apiUrl}${ENDPOINTS.SUCURSALES.DELETE(id)}`,
    ).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.log("Error al eliminar la sucursal: ", error);
        throw error
      })

    )
  }

}
