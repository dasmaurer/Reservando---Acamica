var Reserva = function ( horarioReserva, cantPersonas, precioXPersona, codigoDesc) {
    this.horarioReserva = horarioReserva;
    this.cantPersonas = cantPersonas;
    this.precioXPersona = precioXPersona;
    this.codigoDesc = codigoDesc;
};


Reserva.prototype.calcularPrecioBase = function(Reserva) {
    precioBase = this.cantPersonas * this.precioXPersona;
    return precioBase;
};



Reserva.prototype.calcularDescuentos = function() {
    var descuentos = 0;
    if (this.cantPersonas >= 4 && this.cantPersonas <= 6) {
      descuentos += this.calcularPrecioBase() * 0.05;
    }
    if (this.cantPersonas >= 7 && this.cantPersonas <= 8) {
      descuentos += this.calcularPrecioBase() * 0.1;
    }
    if (this.cantPersonas > 8) {
      descuentos += this.calcularPrecioBase() * 0.15;
    }
  
    switch (this.codigoDesc) {
      case "DES15":
        descuentos += this.calcularPrecioBase() * 0.15;
        break;
      case "DES200":
        descuentos += 200;
        break;
      case "DES1":
        descuentos += this.precioXPersona;
        break;
    }
  
    return descuentos;
  }

Reserva.prototype.adicionales = function() {
    var adicionales = 0;
  
    if (this.horarioReserva.getHours() >= 13 && this.horarioReserva.getHours() <= 14) {
      adicionales += this.calcularPrecioBase() * 0.05;
    }
    if (this.horarioReserva.getHours() >= 20 && this.horarioReserva.getHours() <= 21) {
      adicionales += this.calcularPrecioBase() * 0.05;
    }
    if (this.horarioReserva.getDay() == 5 || this.horarioReserva.getDay() == 6 || this.horarioReserva.getDay() == 0) {
      adicionales += this.calcularPrecioBase() * 0.1;
    }
    return adicionales;
  }


  Reserva.prototype.calcularPrecioTotal = function() {
    return this.calcularPrecioBase() + this.adicionales() - this.calcularDescuentos();
  };
