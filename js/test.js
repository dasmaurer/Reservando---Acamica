//var assert = chai.assert;
var expect = chai.expect;


// Paso 2: Testeá la función reservarHorario(horario) ///////////////////////////////////////////////////////////////////////////////////

describe("testear funcionalidades de reservarHorario()", function() {

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

describe("testear funcionalidades de obtenerPuntuacion()", function() {

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

describe("testear funcionalidades de calificar()", function(){
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




// Paso 6: Testeá la función obtenerRestaurantes()  ////////////////////////////////////////////////////////////////////////////////////////////////////
