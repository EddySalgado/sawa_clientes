import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { MenuOption } from '../../../models/menu.interface';
import {ENDPOINTS} from "./ENDPOINTS";
import {response} from "express";
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  private permisosSubject = new BehaviorSubject<MenuOption[]>([]);
  permisos$ = this.permisosSubject.asObservable();

  private apiUrl = 'https://sawapi.up.railway.app/api'; //url
  constructor(private http: HttpClient) {
  }

  cargarPermisos(userId: number): Observable<MenuOption[]> {
    return this.http.get<any>
    (`${this.apiUrl}${ENDPOINTS.PERMISOS.GET_PERMISOS_USUARIO(userId)}`)
      .pipe(
      tap(response=> {
        if(response.success && response.data){
          this.permisosSubject.next(response.data);
          console.log(response);
        }}),
      catchError(error => {
        console.error('error en el servicor', error)
        throw error
      })
    );
  }
}
