[Regresar](../README.md)

# tuple

- Las tuplas permiten expresar un arreglo con un numero fijo de elementos
- Los tipos de datos son conocidos

```ts
// Tuplas
let sentence: [string, number, string];
sentence = ["I have", 45, "apples"];
console.log(sentence);
console.log(sentence[2]);

// Arreglo de tuplas
let dogs: [string, number][] = [];
dogs.push(["Hercules", 6]);
dogs.push(["Bruce", 9]);
dogs.push(["Kit", 9]);

dogs[2][0] = dogs[2][0].concat("ten");

console.log(dogs);
```
