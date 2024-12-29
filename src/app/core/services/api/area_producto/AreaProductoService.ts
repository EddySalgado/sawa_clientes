import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import { AreaProductoResponse } from './AreaProductoResponse';
import {ProductoResponse} from "../productos/ProductoResponse"; // Importa la interface


@Injectable({
  providedIn: 'root'
})
export class AreaProductoService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // 1. Parámetro en la ruta (Path Parameter).
  getAreasById(id: number | string): Observable<AreaProductoResponse[]> {
    return this.http.get<AreaProductoResponse[]>(
      `${this.apiUrl}${ENDPOINTS.AREAS_PRODUCTOS.GET_BY_ID(id)}`
    ).pipe(
      tap(response => console.log('Respuesta del servicio:', response)),
      catchError(error => {
        console.error('Error en el servicio:', error);
        throw error;
      })
    );
  }

  // 2. Crear nueva Area-producto (POST).
  createAreaProductos(cliente: AreaProductoResponse): Observable<AreaProductoResponse> {
    return this.http.post<AreaProductoResponse>(
      `${this.apiUrl}${ENDPOINTS.PRODUCTOS.CREATE}`,
      cliente
    ).pipe(
      tap(response => console.log('Area creada:', response)),
      catchError(error => {
        console.error('Error al crear el area del producto:', error);
        throw error;
      })
    );
  }

  // Eliminar un area-producto  (delete).
  deleteAreaProducto(id: number | string) {
    return this.http.delete(
      `${this.apiUrl}${ENDPOINTS.AREAS_PRODUCTOS.DELETE(id)}`,
    ).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.log("Error al eliminar el area del producto: ", error);
        throw error
      })

    )
  }

}

