export const ENDPOINTS = {
  CLIENTES: {
    GET_ALL: '/list-clientes',
    GET_BY_ID: (id: number | string) => `/list-clientes/${id}` // Template para URL con parámetro
  }
};
