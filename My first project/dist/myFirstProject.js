"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Art_artType;
// Clases
var TypesOfArt;
(function (TypesOfArt) {
    TypesOfArt["Painting"] = "Painting";
    TypesOfArt["Sculpture"] = "Sculpture";
    TypesOfArt["Architecture"] = "Architecture";
    TypesOfArt["Music"] = "Music";
    TypesOfArt["Dance"] = "Dance";
    TypesOfArt["Coding"] = "Coding";
})(TypesOfArt || (TypesOfArt = {}));
class Art {
    constructor(artName, artType, artAuthor) {
        _Art_artType.set(this, void 0);
        (this.artName = artName),
            (__classPrivateFieldSet(this, _Art_artType, artType, "f")),
            (this.artAuthor = artAuthor);
    }
    showMyArt() {
        return `Hi, my name is ${this.artAuthor} and today I will show you a ${__classPrivateFieldGet(this, _Art_artType, "f")} type art, its name is ${this.artName}`;
    }
}
_Art_artType = new WeakMap();
const sun = new Art("Sun", TypesOfArt.Painting, "Pepe");
console.log(sun.showMyArt());
// La siguiente linea de codigo nos dara un error, ya que estamos tratando de acceder a una
// propiedad privada
// sun.artName = "Moon"; // private.
// La siguiente linea tambien daria un error, ya que lo definimos como privado
// sun.#artType = TypesOfArt.Sculpture; // private
sun.artAuthor = "Antonio"; // public
console.log(sun.showMyArt());
// En este caso estamos tratando de acceder a las propiedades de sun 
console.log(sun);
