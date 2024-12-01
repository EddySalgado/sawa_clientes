import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import {STORAGE_KEYS} from "../../constants/Storage-keys";
import {isPlatformBrowser} from "@angular/common";

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
  private isAuthenticated = new BehaviorSubject<boolean>(false); // para protjer rutas
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    // Solo verificar el estado de autenticación si estamos en el navegador

    this.isAuthenticated.next(this.checkAuthStatus());

  }

  login(correo: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { correo, password })
      .pipe(
        tap(response => {
          if (response.login && response.status === 200) {
            this.isAuthenticated.next(true);
          }
        })
      );
  }

  logout() {
    this.isAuthenticated.next(false);
    if (this.isBrowser) {
      localStorage.removeItem(STORAGE_KEYS.ID_USER);
    }
  }

  isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }

  checkAuthStatus(): boolean {
    if (!this.isBrowser) {
      return false;
    }
    return !!localStorage.getItem(STORAGE_KEYS.ID_USER);
  }
}
