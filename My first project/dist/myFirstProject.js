"use strict";
// Enums
var Polygons;
(function (Polygons) {
    Polygons[Polygons["Circle"] = 0] = "Circle";
    Polygons[Polygons["Triangle"] = 3] = "Triangle";
    Polygons[Polygons["Square"] = 4] = "Square";
    Polygons[Polygons["Pentagon"] = 5] = "Pentagon";
})(Polygons || (Polygons = {}));
const myShape01 = Polygons.Square;
console.log(myShape01);
console.log(Polygons.Square);
console.log(Polygons[myShape01]);
// Cuando declaras enums numericos si no declaramos algun valor este tomara el mismo
// valor del valor anterior y le suma 1. Como se muestra en el siguiente console.log()
console.log(Polygons.Pentagon);
var Antonyms;
(function (Antonyms) {
    Antonyms["Happy"] = "Sad";
    Antonyms["Mad"] = "Appeased";
    Antonyms["Wet"] = "Dry";
    Antonyms["Alive"] = "Dead";
})(Antonyms || (Antonyms = {}));
const myStatus = Antonyms.Happy;
console.log(myStatus);
