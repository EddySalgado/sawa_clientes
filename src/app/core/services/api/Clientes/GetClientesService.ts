import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import { ClientesResponse } from './ClientesResponse'; // Importa la interface


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // 1. Parámetro en la ruta (Path Parameter)
  getClienteById(id: number | string): Observable<ClientesResponse> {
    return this.http.get<ClientesResponse>(
      `${this.apiUrl}${ENDPOINTS.CLIENTES.GET_BY_ID(id)}`
    );
  }
}
