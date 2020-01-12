//var assert = chai.assert;
var expect = chai.expect;


// Paso 2: Testeá la función reservarHorario(horario) ///////////////////////////////////////////////////////////////////////////////////

describe("Testear funcionalidades de reservarHorario()", function() {

    var restaurantTest;
    beforeEach(function() {
       restaurantTest = new Restaurant (
            24, 
            "Maison Kayser", 
            "Desayuno", 
            "Nueva York", 
            ["21:00", "22:30", "15:00"], 
            "../img/desayuno2.jpg", 
            [9, 5, 7, 6, 7]
            );
        });

    //  Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.
    it("Debería eliminar el horario reservado del arreglo", function(){
        restaurantTest.reservarHorario("22:30");
        expect(restaurantTest.horarios).to.eql(["21:00", "15:00"]);
    });
    // Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.
    it("Debería no modificar el array de horarios si se reserva un horario no valido", function(){
        restaurantTest.reservarHorario("06:00");
        expect(restaurantTest.horarios).to.eql(["21:00", "22:30", "15:00"])
    });
    // Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual
    it("El arreglo debería no ser modificado cuando no se le pasa parámetro a la Fn()", function(){
        restaurantTest.reservarHorario("");
        expect(restaurantTest.horarios).to.eql(["21:00", "22:30", "15:00"]);
    });
});


// Paso 3: Testeá la función obtenerPuntuación()  ///////////////////////////////////////////////////////////////////////////////////////////

describe("Testear funcionalidades de obtenerPuntuacion()", function() {

    // Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.
    it("Debería calcular correctamente el promedio", function() {
        var restaurantTest = new Restaurant (
            14, 
            "TGood Seed Salads & Market", 
            "Ensalada", 
            "Nueva York", 
            ["17:00", "19:00", "22:30"], 
            "../img/ensalada4.jpg", 
            [8, 8, 8, 8, 5, 7]);
          //restaurantTest.calificaciones = [8, 8, 8, 8, 5, 7];
            expect(restaurantTest.obtenerPuntuacion()).to.equal(7.3);
    });


    // Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.
    it("Debería mostrar puntuación 0 para restaurantes no calificados", function(){
        var restaurantTest = new Restaurant (
            1000, 
            "new Restaurant", 
            "new Restaurant Comida", 
            "new Restaurant Ciudad", 
            ["horario1", "horario2", "horario3"], 
            "../img/xxxxx.jpg", 
            []);
        expect(restaurantTest.obtenerPuntuacion()).to.equal(0);
    })
});


// Paso 4: Testeá la función calificar()  ////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Testear funcionalidades de calificar()", function(){
    var restaurantTest;
    beforeEach(function() {
        restaurantTest = new Restaurant (
            24, 
            "Maison Kayser", 
            "Desayuno", 
            "Nueva York", 
            ["21:00", "22:30", "15:00"], 
            "../img/desayuno2.jpg", 
            [9, 5, 7, 6, 7]);
    });
    it("Debería no sumar valor al array si la calificación es un número menor a 0", function(){
restaurantTest.calificar(-1);
expect(restaurantTest.calificaciones).to.eql([9, 5, 7, 6, 7]);

    });
    it("Debería no sumar valor al array si es un número mayor a 10", function(){
        restaurantTest.calificar(11);
        expect(restaurantTest.calificaciones).to.eql([9, 5, 7, 6, 7]);
    });
    it("Debería sumar una calificación al array calificaciones si el número está entre 0 y 10", function(){
        restaurantTest.calificar(7);
        expect(restaurantTest.calificaciones).to.eql([9, 5, 7, 6, 7, 7]);
    });
    it("Debería no sumar una calificación al array calificaciones si el valor no es un número", function(){
        restaurantTest.calificar("a");
        expect(restaurantTest.calificaciones).to.eql([9, 5, 7, 6, 7]);
    });
    it("Si no se califica no debería modificar el array calificaciones", function(){
        restaurantTest.calificar();
        expect(restaurantTest.calificaciones).to.eql([9, 5, 7, 6, 7]);
    });
});

// Paso 5: Testeá la función buscarRestaurante(id)  ////////////////////////////////////////////////////////////////////////////////////////////////////
describe("Testear de funcionalidades de buscarRestaurante()", function(){
    it("Deberia buscar el restaurante por el id en la lista de restaurantes", function(){
      var listadoRestaurantesTest = [
        new Restaurant(
          1,
          "TAO Uptown",
          "Asiática",
          "Nueva York",
          ["13:00", "15:30", "18:00"],
          "../img/asiatica1.jpg",
          [6, 7, 9, 10, 5]
        ),
        new Restaurant(
          2,
          "Mandarín Kitchen",
          "Asiática",
          "Londres",
          ["15:00", "14:30", "12:30"],
          "../img/asiatica2.jpg",
          [7, 7, 3, 9, 7]
        )
      ];
  
      var restauranteBuscado =   new Restaurant(
        2,
        "Mandarín Kitchen",
        "Asiática",
        "Londres",
        ["15:00", "14:30", "12:30"],
        "../img/asiatica2.jpg",
        [7, 7, 3, 9, 7]
      )
  
      listadoRestaurantesTest = new Listado(listadoRestaurantesTest);
      expect(listadoRestaurantesTest.buscarRestaurante(2)).to.eql(restauranteBuscado);
    });
  });

// Paso 6: Testeá la función obtenerRestaurantes()  ////////////////////////////////////////////////////////////////////////////////////////////////////
describe("Testear funcionalidades de obtenerRestaurantes()", function(){
    it("Debería devolver un listado de restaurantes si se pasan todos los datos filtrados", function(){
        var restaurantes = listado.obtenerRestaurantes('Pasta', 'Roma', '13:00');
        expect(restaurantes[0].nombre).to.equal('Osteria Da Fortunata');
    });
    it("Debería no devolver resultados si los filtros estan vacíos", function(){
        var restaurantes = listado.obtenerRestaurantes('13:00');
      expect(restaurantes.length).to.equal(0);
    });
});

// OBJETO Reserva   Paso 2 - Green: Escribí el código mínimo e indispensable para que las pruebas pasen  ///////////////////////////////////////////////

describe("Testear de funcionalidades de PrecioBase()", () => {
    it("Si realizo una reserva valida, obtener el precio base", () => {
      var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
  
      expect(reserva1.calcularPrecioBase()).to.equal(2800);
    });
});

  describe("Testear de funcionalidades de PrecioTotal()", () => {
    it("Si realizo una reserva valida, obtener el precio total", () => {
      var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
      expect(reserva1.calcularPrecioTotal()).to.equal(2450);
    });
  })
