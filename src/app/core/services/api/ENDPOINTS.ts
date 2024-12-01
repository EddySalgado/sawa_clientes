export const ENDPOINTS = {
  CLIENTES: {
    GET_ALL: '/list-clientes',
    CREATE: '/create-cliente',
    DELETE: (id: number | string) => `/delete-cliente/${id}`,
    GET_BY_ID: (id: number | string) => `/list-clientes/${id}` // Template para URL con parámetro
  },

  AREAS_PRODUCTOS: {
    GET_BY_ID: (id: number | string) => `/list-areas-productos/${id}` // Template para URL con parámetro
  },

  PRODUCTOS:{
    GET_BY_ID: (id: number | string) => `/list-productos/${id}` // Template para URL con parámetro
  },

  AREA_TRABAJADORES:{
    GET_BY_ID: (id: number | string) => `/list-areas-trabajador/${id}`
  },

  COMPRAS:{
    GET_BY_ID: (id: number | string) => `/list-compras/${id}`
  },

  PROVEDORES:{
    GET_BY_ID: (id: number | string) => `/list-provedores/${id}`
  },

  SUCURSALES:{
    GET_BY_ID: (id: number | string) => `/list-sucursales/${id}`
  },

  TRABAJADORES:{
    GET_BY_ID: (id: number | string) => `/list-trabajadores/${id}`
  },
  VENTAS:{
    GET_BY_ID: (id: number | string) => `/list-ventas/${id}`
  },

  PERMISOS:{
    GET_PERMISOS_USUARIO: (id: number | string) => `/get-permisos/${id}`
  }

};
