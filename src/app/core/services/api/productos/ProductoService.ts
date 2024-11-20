import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { ENDPOINTS } from '../ENDPOINTS';
import { ProductoResponse } from './ProductoResponse'; // Importa la interface


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // 1. Parámetro en la ruta (Path Parameter)
  getProductosById(id: number | string): Observable<ProductoResponse[]> {
    return this.http.get<ProductoResponse[]>(
      `${this.apiUrl}${ENDPOINTS.PRODUCTOS.GET_BY_ID(id)}`
    ).pipe(
      tap(response => console.log('Respuesta del servicio:', response)),
      catchError(error => {
        console.error('Error en el servicio:', error);
        throw error;
      })
    );
  }

  // 2. Crear nuevo cliente (POST)
  createProductos(cliente: ProductoResponse): Observable<ProductoResponse> {
    return this.http.post<ProductoResponse>(
      `${this.apiUrl}${ENDPOINTS.PRODUCTOS.CREATE}`,
      cliente
    ).pipe(
      tap(response => console.log('Producto creado:', response)),
      catchError(error => {
        console.error('Error al crear el producto:', error);
        throw error;
      })
    );
  }

  // Eliminar un cliente  (delete)
  deleteProductos(id: number | string) {
    return this.http.delete(
      `${this.apiUrl}${ENDPOINTS.PRODUCTOS.DELETE(id)}`,
    ).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.log("Error al crear el cliente: ", error);
        throw error
      })

    )
  }

}
//
