export interface TrabajadoresResponse {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  id_usuario: number;
  id_sucursal: number;
  id_area_trabajador: number;
  sueldo: number;
  periodo_de_pago: string;
  cuenta_bancaria: string;
  password: string;
  activo: boolean;
}
