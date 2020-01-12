var Reserva = function ( horario, cantPersonas, precioXPersona, codigoDesc) {
    this.horario = Date;
    this.cantPersonas = cantPersonas;
    this.precioXPersona = precioXPersona;
    this.codigoDesc = codigoDesc;
};


Reserva.prototype.calcularPrecioBase = function() {

    return this.cantPersonas * this.precioXPersona;
};

Reserva.prototype.calcularPrecioTotal = function() {
    return this.calcularPrecioBase + adicionales - descuentos;
};


Reserva.prototype.calcularDescuentos = function(Reserva) {
 var descuentos = 0;
 if (this.cantPersonas >= 4 && this.cantPersonas <= 6) {
     descuentos = this.calcularPrecioBase() - 0.05;
 }
 if (this.cantPersonas >=7 && this.cantPersonas <= 8) {
     descuentos = this.calcularPrecioBase() - 0.1;
 }
 if (this.cantpersonas > 8) {
     descuentos = this.calcularPrecioBase() - 0.15;
 }

 switch (this.codigoDesc) {
     case "DES15":
         descuentos = this.calcularPrecioBase - 0.15;
         break;
     case "DES200":
         descuentos = this.calcularPrecioBase - 200;
         break;
     case "DES1":
         descuentos = this.calcularPrecioBase - this.precioXPersona;
         break;
    }
    return descuentos;
}

Reserva.prototype.calcularAdicionales = function(Reserva){
    var adicionales = 0;
    if (this.horario >= 13 && this.horario <= 14 || this.horario >= 21 && this.horario <= 22) {
        adicionales = this.calcularPrecioBase() * 0.05;
    }
    if ( reserva.horario.getDay() == 5 || reserva.horario.getDay() == 6 || reserva.horario.getDay() == 0) {
        adicionales = this.calcularPrecioBase() * 0.1;
    }
    return adicionales;
}

