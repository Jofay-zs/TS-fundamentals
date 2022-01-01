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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Art = void 0;
const item_1 = require("./item");
const enums_1 = require("./enums");
class Art extends item_1.Item {
    constructor(id, artName, artType, artAuthor) {
        super(id, artName);
        _Art_artType.set(this, void 0);
        __classPrivateFieldSet(this, _Art_artType, artType, "f");
        this.artAuthor = artAuthor;
    }
    get getArtType() {
        return __classPrivateFieldGet(this, _Art_artType, "f");
    }
    set setArtType(artType) {
        __classPrivateFieldSet(this, _Art_artType, artType, "f");
    }
    get getArtAuthor() {
        return this.artAuthor;
    }
    set setArtAuthor(artAuthor) {
        this.artAuthor = artAuthor;
    }
    showMyArt() {
        return `Hi, my name is ${this.artAuthor} and today I will show you a ${__classPrivateFieldGet(this, _Art_artType, "f")} type art, its name is ${this.artName}`;
    }
}
exports.Art = Art;
_Art_artType = new WeakMap();
Art.typeOfArt = enums_1.TypesOfArt;
