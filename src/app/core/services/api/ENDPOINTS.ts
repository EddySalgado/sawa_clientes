export const ENDPOINTS = {
  CLIENTES: {
    GET_ALL: '/list-clientes',
    CREATE: '/create-cliente',
    DELETE: (id: number | string) => `/delete-cliente/${id}`,
    GET_BY_ID: (id: number | string) => `/list-clientes/${id}` // Template para URL con parámetro
  },

  AREAS_PRODUCTOS: {
    GET_ALL: '/list-areas-producto',
    CREATE: '/create-area-producto',
    DELETE: (id: number | string) => `/delete-area-producto/${id}`,
    GET_BY_ID: (id: number | string) => `/list-areas-productos/${id}` // Template para URL con parámetro
  },

  PRODUCTOS:{
    GET_ALL: '/list-productos',
    CREATE: '/create-producto',
    DELETE: (id: number | string) => `/delete-producto/${id}`,
    GET_BY_ID: (id: number | string) => `/list-productos/${id}` // Template para URL con parámetro
  },

  AREA_TRABAJADORES:{
    GET_ALL: '/list-areas-trabajador',
    CREATE: '/create-area-trabajadores',
    DELETE: (id: number | string) => `/delete-area-trabajadores/${id}`,
    GET_BY_ID: (id: number | string) => `/list-areas-trabajadores/${id}` // Template para URL con parámetro
  },

  COMPRAS:{
    GET_BY_ID: (id: number | string) => `/list-compras/${id}`
  },

  PROVEDORES:{
    GET_ALL: '/list-provedores',
    CREATE: '/create-provedor',
    DELETE: (id: number | string) => `/delete-provedor/${id}`,
    GET_BY_ID: (id: number | string) => `/list-provedores/${id}` // Template para URL con parámetro
  },

  SUCURSALES:{
    GET_ALL: '/list-sucursales',
    CREATE: '/create-sucursal',
    DELETE: (id: number | string) => `/delete-sucursal/${id}`,
    GET_BY_ID: (id: number | string) => `/list-sucursales/${id}` // Template para URL con parámetro
  },

  TRABAJADORES: {
    GET_ALL: '/list-trabajadores',
    CREATE: '/create-trabajador',
    DELETE: (id: number | string) => `/delete-trabajador/${id}`,
    GET_BY_ID: (id: number | string) => `/list-trabajadores/${id}` // Template para URL con parámetro
  },

  VENTAS:{
    GET_BY_ID: (id: number | string) => `/list-ventas/${id}`
  },

  PERMISOS:{
    GET_PERMISOS_USUARIO: (id: number | string) => `/get-permisos/${id}`
  }

};
