[Regresar](../README.md)

# Object vs object

- object es el tipo de dato que representa un valor no primitivo
- Es el tipo para variable que no sea number, string, boolean, null, undefined, etc.
- **Object**: instancia de la clase object de JS
- **object**: tipo para valores no primitivos, con este tipo no se puede acceder a las propiedades del objeto

```ts
// object
let user: object;
user = {};

user = {
  id: 1,
  userName: "Jofay",
  userLastName: "zs",
  isStudent: true,
};

console.log(user);
// console.log(user.userName)
// El codigo de arriba dara error, ya que TS no permite
// acceder a los datos de dicho objeto, mas adelante veremos porque.

// Cuando creamos un objeto de forma implicita, TS inferira que es
// de tipo Object
let myInfo = {
  id: 1,
  userName: "Jofay",
  userLastName: "zs",
  isStudent: true,
};

console.log(myInfo.id);

// Con instanceOf podemos verificar si una variable es de cierto tipo o no
const isObject = myInfo instanceof Object;
console.log(isObject); //true
```