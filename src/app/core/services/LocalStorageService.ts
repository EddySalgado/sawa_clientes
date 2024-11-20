// LocalStorage service
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? item : "0";
  }
  // Eliminar un dato específico
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Limpiar todo el storage
  clear(): void {
    localStorage.clear();
  }

  // Ejemplo de uso con diferentes tipos de datos
  saveId_user(id: string): void {
    this.setItem('id_user', id);
  }

  saveSettings(settings: any): void {
    this.setItem('settings', settings);
  }

  saveToken(token: string): void {
    this.setItem('token', token);
  }
}
