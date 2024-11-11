import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import {AreaTrabajadoresResponse} from "./AreaTrabajadoresResponse"; // Importa la interface


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
}
//
