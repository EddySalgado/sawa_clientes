import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserResponse {
  activo: boolean
  correo: string
  id: number
  nombre: string
  password: string
}

interface LoginResponse {
  login: boolean;
  status: number;
  tipo_user: string;
  id_user: number;
  id_sucursal: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://sawapi.up.railway.app/api';

  constructor(private http: HttpClient) { }

  login(correo: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { correo, password });
  }
}

