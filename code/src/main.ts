import { Art } from "./art";
import { TypesOfArt } from "./enums";

let adventure = new Art("21hj3h1", "adventure", TypesOfArt.Painting, "Anonimo");

console.log(adventure.showMyArt());
console.log(adventure);
adventure.setArtAuthor = "Lorenzo";
adventure.setArtName = "Bridge";
adventure.setArtType = TypesOfArt.Architecture;
console.log(adventure);
