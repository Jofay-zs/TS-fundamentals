[Regresar](../README.md)

# emun

- Los enumarados permiten definir un conjunto de constantes con nombre.
- Tienen la ventaja de adaptarse al contexto de la aplicacion.

```ts
// Enums

enum Polygons {
  Circle = 0,
  Triangle = 3,
  Square = 4,
  Pentagon,
}

const myShape01: Polygons = Polygons.Square;
console.log(myShape01);
console.log(Polygons.Square);
console.log(Polygons[myShape01]);

// Cuando declaras enums numericos si no declaramos algun valor este tomara el mismo
// valor del valor anterior y le suma 1. Como se muestra en el siguiente console.log()
console.log(Polygons.Pentagon);

enum Antonyms {
  Happy = "Sad",
  Mad = "Appeased",
  Wet = "Dry",
  Alive = "Dead",
}

const myStatus: Antonyms = Antonyms.Happy;
console.log(myStatus);
```
