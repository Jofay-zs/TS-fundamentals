import { Item } from "./item";
import { TypesOfArt } from "./enums";

export class Art extends Item {
  static typeOfArt = TypesOfArt;

  #artType: TypesOfArt;
  artAuthor: string;

  constructor(
    id: string,
    artName: string,
    artType: TypesOfArt,
    artAuthor: string
  ) {
    super(id, artName);
    this.#artType = artType;
    this.artAuthor = artAuthor;
  }

  get getArtType() {
    return this.#artType;
  }
  set setArtType(artType: TypesOfArt) {
    this.#artType = artType;
  }

  get getArtAuthor() {
    return this.artAuthor;
  }
  set setArtAuthor(artAuthor: string) {
    this.artAuthor = artAuthor;
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${
      this.#artType
    } type art, its name is ${this.artName}`;
  }
}
