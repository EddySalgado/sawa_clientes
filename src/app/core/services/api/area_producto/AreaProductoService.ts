import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import { AreaProductoResponse } from './AreaProductoResponse'; // Importa la interface


@Injectable({
  providedIn: 'root'
})
export class AreaProductoService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // 1. Parámetro en la ruta (Path Parameter)
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
}
//
