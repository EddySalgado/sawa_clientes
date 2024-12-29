import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {ProductoResponse} from "../productos/ProductoResponse";
import {ENDPOINTS} from "../ENDPOINTS";
import {TrabajadoresResponse} from "./TrabajadoresResponse";
import {SucursalesResponse} from "../sucursales/SucursalesResponse";

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  constructor(private http: HttpClient) { }

  // 1. Parámetro en la ruta (Path Parameter).
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

  // 2. Crear nuevo trabajador (POST).
  createTrabajador(cliente: TrabajadoresResponse): Observable<TrabajadoresResponse> {
    return this.http.post<TrabajadoresResponse>(
      `${this.apiUrl}${ENDPOINTS.TRABAJADORES.CREATE}`,
      cliente
    ).pipe(
      tap(response => console.log('Trabajador creado:', response)),
      catchError(error => {
        console.error('Error al crear el trabajador:', error);
        throw error;
      })
    );
  }

  // Eliminar una sucursal (delete).
  deleteTrabajadores(id: number | string) {
    return this.http.delete(
      `${this.apiUrl}${ENDPOINTS.TRABAJADORES.DELETE(id)}`,
    ).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.log("Error al eliminar el trabajador: ", error);
        throw error
      })

    )
  }

}
