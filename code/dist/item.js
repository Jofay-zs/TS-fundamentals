"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(id, artName) {
        (this.id = id), (this.artName = artName);
    }
    get getId() {
        return this.id;
    }
    get getArtName() {
        return this.artName;
    }
    set setArtName(artName) {
        this.artName = artName;
    }
}
exports.Item = Item;
