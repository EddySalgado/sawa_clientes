import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import { ClientesResponse } from './ClientesResponse'; // Importa la interface


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // 1. Parámetro en la ruta (Path Parameter)
  getClienteById(id: number | string): Observable<ClientesResponse[]> {
    return this.http.get<ClientesResponse[]>(
      `${this.apiUrl}${ENDPOINTS.CLIENTES.GET_BY_ID(id)}`
    ).pipe(
      tap(response => console.log('Respuesta del servicio:', response)),
      catchError(error => {
        console.error('Error en el servicio:', error);
        throw error;
      })
    );
  }

  // 2. Crear nuevo cliente (POST)
  createCliente(cliente: ClientesResponse): Observable<ClientesResponse> {
    return this.http.post<ClientesResponse>(
      `${this.apiUrl}${ENDPOINTS.CLIENTES.CREATE}`,
      cliente
    ).pipe(
      tap(response => console.log('Cliente creado:', response)),
      catchError(error => {
        console.error('Error al crear el cliente:', error);
        throw error;
      })
    );
  }
}

