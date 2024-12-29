import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import {AreaTrabajadoresResponse} from "./AreaTrabajadoresResponse";
import {AreaProductoResponse} from "../area_producto/AreaProductoResponse"; // Importa la interface


@Injectable({
  providedIn: 'root'
})
export class AreaTrabajadoresService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // 1. Parámetro en la ruta (Path Parameter)
  getAreasTrabajadorById(id: number | string): Observable<AreaTrabajadoresResponse[]> {
    return this.http.get<AreaTrabajadoresResponse[]>(
      `${this.apiUrl}${ENDPOINTS.AREA_TRABAJADORES.GET_BY_ID(id)}`
    ).pipe(
      tap(response => console.log('Respuesta del servicio:', response)),
      catchError(error => {
        console.error('Error en el servicio:', error);
        throw error;
      })
    );
  }

  // 2. Crear nueva Area-producto (POST).
  createAreaTrabajadores(cliente: AreaTrabajadoresResponse): Observable<AreaTrabajadoresResponse> {
    return this.http.post<AreaTrabajadoresResponse>(
      `${this.apiUrl}${ENDPOINTS.AREA_TRABAJADORES.CREATE}`,
      cliente
    ).pipe(
      tap(response => console.log('Area creada:', response)),
      catchError(error => {
        console.error('Error al crear el area del trabajadores:', error);
        throw error;
      })
    );
  }

  // Eliminar un area-trabajador (delete).
  deleteAreaTrabajadores(id: number | string) {
    return this.http.delete(
      `${this.apiUrl}${ENDPOINTS.AREA_TRABAJADORES.DELETE(id)}`,
    ).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.log("Error al eliminar el area de trabajador: ", error);
        throw error
      })

    )
  }

}
