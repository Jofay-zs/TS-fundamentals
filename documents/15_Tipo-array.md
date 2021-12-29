[Regresar](../README.md)

# array

- Al igual que JS, TS permite definir un arreglo para contener un conjunto de valores.
- Usa dos notaciones:

```
[] y Array<tipo>
```

```ts
// Array []

// Explicito
let names: string[];
names = ["Elon", "Freddy", "Shu", "Annie"];
// users = [123, false] <-- Error

// Inferido
let numbers = [12, 34, 763, 16, 19];
// numbers = ["someText", true] < --Error;

//Array<tipo>

// Explicito
let jsFrameworks: Array<string>;
// proLang = [12,true] <-- Error
jsFrameworks = ["React", "Next", "Vue", "Angular"];

// Accediendo a valores
console.log(names[0]);
console.log(numbers[4]);
console.log(jsFrameworks[1]);

// Propiedades en array
console.log(jsFrameworks.length);

// Uso de funciones
names.push("Jofay");
names.sort();
console.log(names);
```
