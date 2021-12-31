// Clases
enum TypesOfArt {
  Painting = "Painting",
  Sculpture = "Sculpture",
  Architecture = "Architecture",
  Music = "Music",
  Dance = "Dance",
  Coding = "Coding",
}

class Art {
  // Declaramos artName como privado
  private artName: string;
  #artType: TypesOfArt;
  artAuthor: string;

  constructor(artName: string, artType: TypesOfArt, artAuthor: string) {
    (this.artName = artName),
      (this.#artType = artType),
      (this.artAuthor = artAuthor);
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${
      this.#artType
    } type art, its name is ${this.artName}`;
  }
}

const sun = new Art("Sun", TypesOfArt.Painting, "Pepe");

// La siguiente linea de codigo nos dara un error, ya que estamos tratando de acceder a una
// propiedad privada
// sun.artName = "Moon"; // private.

// La siguiente linea tambien daria un error, ya que lo definimos como privado
// sun.#artType = TypesOfArt.Sculpture; // private

sun.artAuthor = "Antonio"; // public

// En este caso estamos tratando de acceder a las propiedades de sun. Esta nos devolvera 
// artAuthor ya que es publica y artName, porque la definimos como private. En cambio
// no nos sera devuelto #artType, porque fue definida con la sintaxis: #attribute
console.log(sun); // Art { artName: 'Sun', artAuthor: 'Antonio' }