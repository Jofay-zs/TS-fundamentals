import { Art } from "./art";

export class Show {
  show: Art[];

  constructor() {
    this.show = [];
  }

  addArt(art: Art) {
    this.show.push(art);
  }

  removeArt(art: Art): Art | undefined {
    const index = this.show.findIndex((a) => a.getId === art.getId);
    let deletedArt;
    if (index >= 0) {
      deletedArt = this.show[index];
      this.show.splice(index, 1);
    }
    return deletedArt;
  }
}
