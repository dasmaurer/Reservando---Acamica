var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

// Paso 1: Refactorizá la función reservarHorario(horario) utilizando la función filter.


///////////////FUNCIÓN ORIGINAL/////////////////////////////////////////
// Restaurant.prototype.reservarHorario = function(horarioReservado) {
//     for (var i = 0; i < this.horarios.length; i++) {
//         if (this.horarios[i] === horarioReservado) {
//             this.horarios.splice(i, 1);
//             return;
//         }
//     }
// }

// Función reservarHorario refactorizada :  //////////
Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(function(horario) {
      return horario !== horarioReservado;
    })
}


Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}


// Paso 2: Modularizá la función obtenerPuntuacion().
///////////////FUNCIÓN ORIGINAL/////////////////////////////////////////
// Restaurant.prototype.obtenerPuntuacion = function() {
//     if (this.calificaciones.length === 0) {
//         return 0;
//     } else {
//         var sumatoria = 0;
//         for (var i = 0; i < this.calificaciones.length; i++) {
//             sumatoria += this.calificaciones[i]
//         }
//         var promedio = sumatoria / this.calificaciones.length;
//         return Math.round(promedio * 10) / 10;
//     }
// }


// Función obtenerPuntuación modularizada
Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
    return this.promedio(this.calificaciones);
    }
};

// Función promedio modularizada
Restaurant.prototype.promedio = function(numeros) {
    if (numeros.length === 0) {
        return 0;
    } else { 
        var promedio = this.sumatoria(numeros) / numeros.length;
        return Math.round(promedio * 10) / 10;
    }
};

// Función sumatoria modularizada
Restaurant.prototype.sumatoria = function(numeros) {
    if (numeros.length === 0) {
        return 0;
    } else {
        var sumatoria = 0;
        for (var i = 0; i < numeros.length; i++) {
            sumatoria += numeros[i]
        }
        return sumatoria;
    }
};


