import { Art } from "./art";
import { TypesOfArt } from "./enums";
import { Show } from "./show";

let adventure = new Art("21hj3h1", "adventure", TypesOfArt.Painting, "Anonimo");
const clowns = new Art("123123jks", "clowns", TypesOfArt.Dance, "Joker");

// Art
console.log(adventure.showMyArt());
console.log(adventure);

adventure.setArtAuthor = "Lorenzo";
adventure.setArtName = "Bridge";
adventure.setArtType = TypesOfArt.Architecture;

console.log(adventure);

// Show
let opening = new Show();
opening.addArt(adventure);
opening.addArt(clowns);

console.log(opening);

opening.removeArt(adventure);

console.log(opening);
