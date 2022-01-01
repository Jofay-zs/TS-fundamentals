export abstract class Item {
  protected readonly id: string;
  protected artName: string;

  constructor(id: string, artName: string) {
    (this.id = id), (this.artName = artName);
  }

  get getId() {
    return this.id;
  }

  get getArtName() {
    return this.artName;
  }
  set setArtName(artName: string) {
    this.artName = artName;
  }
}
