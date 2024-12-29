import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {response} from "express";
import {ProvedoresResponse} from "../provedores/ProvedoresResponse";
import {ENDPOINTS} from "../ENDPOINTS";
import {AreaTrabajadoresResponse} from "../area_trabajadores/AreaTrabajadoresResponse";

@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {
  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  constructor(private http: HttpClient) { }

  // 1. Parámetro en la ruta (Path Parameter).
  getProvedoresByID(id: number | string): Observable<ProvedoresResponse[]> {
    return this.http.get<ProvedoresResponse[]>
    (`${this.apiUrl}${ENDPOINTS.PROVEDORES.GET_BY_ID(id)}`
    ).pipe(
      tap(response => console.log(response)),
      catchError(error => {
        console.error('error en el servicor', error)
        throw error
      })
    );
  }

  // 2. Crear nuevo proveedor (POST).
  createProvedor(cliente: ProvedoresResponse): Observable<ProvedoresResponse> {
    return this.http.post<ProvedoresResponse>(
      `${this.apiUrl}${ENDPOINTS.PROVEDORES.CREATE}`,
      cliente
    ).pipe(
      tap(response => console.log('Proveedor creado:', response)),
      catchError(error => {
        console.error('Error al crear el proveedor:', error);
        throw error;
      })
    );
  }

  // Eliminar un area-trabajador (delete).
  deleteProvedores(id: number | string) {
    return this.http.delete(
      `${this.apiUrl}${ENDPOINTS.PROVEDORES.DELETE(id)}`,
    ).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.log("Error al eliminar el area de trabajador: ", error);
        throw error
      })

    )
  }

}
