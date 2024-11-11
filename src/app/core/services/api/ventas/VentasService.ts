import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import { VentasResponse } from './VentasResponse'; // Importa la interface


@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // 1. Parámetro en la ruta (Path Parameter)
  getVentasById(id: number | string): Observable<VentasResponse[]> {
    return this.http.get<VentasResponse[]>(
      `${this.apiUrl}${ENDPOINTS.PRODUCTOS.GET_BY_ID(id)}`
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
