"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
class Show {
    constructor() {
        this.show = [];
    }
    addArt(art) {
        this.show.push(art);
    }
    removeArt(art) {
        const index = this.show.findIndex((a) => a.getId === art.getId);
        let deletedArt;
        if (index >= 0) {
            deletedArt = this.show[index];
            this.show.splice(index, 1);
        }
        return deletedArt;
    }
}
exports.Show = Show;
