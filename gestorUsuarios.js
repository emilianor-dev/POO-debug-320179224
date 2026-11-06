function generarUsuarioTemporal(plantilla) {
  const copia = structuredClone(plantilla);  // Se creo una copia profunda del rol de administrador usando 'structuredClone()'. 
  copia.configuracion.notificaciones = false;  // Para lograr que el usuario temporal se aloje en una copia del administrador y no en la dirección de memoria de Administrador.
  copia.rol = "invitado";
  return copia;
}

const usuarioAdmin = {
  rol: "admin",
  configuracion: {
    notificaciones: true,
    tema: "oscuro"
  }
};

const usuarioTemp = generarUsuarioTemporal(usuarioAdmin);
console.log(usuarioAdmin.configuracion.notificaciones);
