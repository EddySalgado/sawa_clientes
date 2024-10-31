export const ENDPOINTS = {
  CLIENTES: {
    GET_ALL: '/list-clientes',
    GET_BY_ID: (id: number | string) => `/list-clientes/${id}` // Template para URL con parámetro
  },

  AREAS_PRODUCTOS: {
    GET_BY_ID: (id: number | string) => `/list-areas-productos/${id}` // Template para URL con parámetro
  },

  PRODUCTOS:{
    GET_BY_ID: (id: number | string) => `/list-productos/${id}` // Template para URL con parámetro
  }
};
